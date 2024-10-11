export const formatQuery = (data) => {
  let queryParams = { page: 1 };

  if (data.page) {
    queryParams.page = data.page;
  }
  if (data.title) {
    queryParams.title = data.title;
  }
  if (data.category) {
    queryParams.category = data.category;
  }
  if (data.collection) {
    queryParams.collection = data.collection;
  }
  if (data.duration) {
    queryParams.duration = data.duration;
  }
  if (data.difficulty) {
    queryParams.difficulty = data.difficulty;
  }
  if (data.material) {
    queryParams.material = data.material;
  }
  if (data.tool) {
    queryParams.tool = data.tool;
  }
  return queryParams;
};
