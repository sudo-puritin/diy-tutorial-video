import React from "react";

import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { FormProvider, FSelect, FTextField } from "../Form";

import "./searchTable.scss";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  MenuItem,
  Stack,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Grid from "@mui/material/Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  CATEGORY_OPTION,
  DIFFICULTY_OPTION,
  DURATION_OPTION,
  MATERIAL_OPTION,
  TOOLS_OPTION,
} from "../../constants/hompage.constants";

const defaultValue = {
  videoTitle: "",
  duration: "",
  difficulty: "",
  category: "",
  material: "",
  tools: "",
};

function SearchTable() {
  const methods = useForm({ defaultValue });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Submitted Data", data);
  };

  return (
    <Box component="div" style={{ padding: "16px 0px 16px 0px" }}>
      <Accordion className="searchContainer">
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
                  <FTextField name="videoTitle" label="Video Title" />
                </Grid>

                <Grid className="grid_box" size={4}>
                  <FSelect name="duration" label="Duration">
                    {DURATION_OPTION.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </FSelect>
                </Grid>

                <Grid className="grid_box" size={4}>
                  <FSelect name="difficulty" label="Difficulty">
                    {DIFFICULTY_OPTION.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </FSelect>
                </Grid>

                <Grid className="grid_box" size={4}>
                  <FSelect name="category" label="Category">
                    {CATEGORY_OPTION.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </FSelect>
                </Grid>

                <Grid className="grid_box" size={4}>
                  <FSelect name="material" label="Material">
                    {MATERIAL_OPTION.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </FSelect>
                </Grid>

                <Grid className="grid_box" size={4}>
                  <FSelect name="tools" label="Tools">
                    {TOOLS_OPTION.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </FSelect>
                </Grid>

                <Grid className="grid_box" size={4}>
                  <LoadingButton
                    className="resultBtn"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    onClick={() => {
                      navigate("/search");
                    }}
                    style={{
                      background: "#35494B",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
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
}

export default SearchTable;
