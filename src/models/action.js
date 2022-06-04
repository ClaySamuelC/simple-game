export const createAction = (name, attributes) => ({
  name: name,
  ...attributes
});
