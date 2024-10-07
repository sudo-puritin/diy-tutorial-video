import React from "react";
import { useForm } from "react-hook-form";
import { FormProvider, FSelect, FTextField } from "../Form";
import {
  CATEGORY_OPTION,
  DIFFICULTY_OPTION,
  DURATION_OPTION,
} from "../../constants/list.constants";
import MaterialMultipleSelect from "../MaterialMulticheck";
import ToolsMultipleSelect from "../ToolsMulticheck";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Grid from "@mui/material/Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./searchTable.scss";

const SearchTable = ({
  title = "",
  category = "",
  duration = "",
  difficulty = "",
  material = [],
  tool = [],
  handleSearchVideo,
}) => {
  const methods = useForm({
    defaultValues: {
      title,
      category,
      duration,
      difficulty,
      material,
      tool,
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data) => {
    const formDataSubmit = {
      ...data,
      material: data.material.join(","),
      tool: data.tool.join(","),
    };
    handleSearchVideo(formDataSubmit);
  };

  return (
    <Box component="div" style={{ padding: "16px 0px 16px 0px" }}>
      <Accordion className="searchContainer" defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Search for your video</h3>
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} mb={2}>
              <Grid
                className="grid_container"
                container
                spacing={2}
                columns={12}
              >
                <Grid className="grid_box" size={4}>
                  <FTextField name="title" label="Video Title" />
                </Grid>

                <Grid className="grid_box" size={4}>
                  <FSelect name="duration" label="Duration">
                    {DURATION_OPTION.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </FSelect>
                </Grid>

                <Grid className="grid_box" size={4}>
                  <FSelect name="difficulty" label="Difficulty">
                    {DIFFICULTY_OPTION.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </FSelect>
                </Grid>

                <Grid className="grid_box" size={4}>
                  <FSelect name="category" label="Category">
                    {CATEGORY_OPTION.map((cate) => (
                      <option key={cate.value} value={cate.value}>
                        {cate.label}
                      </option>
                    ))}
                  </FSelect>
                </Grid>

                <Grid className="grid_box" size={4}>
                  <MaterialMultipleSelect name="material" label="Material" />
                </Grid>

                <Grid className="grid_box" size={4}>
                  <ToolsMultipleSelect name="tool" label="Tool" />
                </Grid>

                <Grid className="grid_box" size={4}>
                  <LoadingButton
                    className="resultBtn"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    disabled={!isDirty}
                  >
                    SHOW RESULTS
                  </LoadingButton>
                </Grid>
              </Grid>
            </Stack>
          </FormProvider>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SearchTable;
