export const formatArrayToStringLabel = (arrayValue, option) => {
  const result = arrayValue
    ?.map((item) => {
      const founded = option.find((ele) => ele.value === item);
      return founded?.label || "";
    })
    .join(", ");

  return result;
};
