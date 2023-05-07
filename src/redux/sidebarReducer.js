let initialState = {
  friends: [
    {
      id: 1,
      name: "Raf",
      online: 1,
    },
    {
      id: 2,
      name: "Vaf",
      online: 1,
    },
    {
      id: 3,
      name: "Ivory",
      online: 1,
    },
  ],
};
const sidebarReducer = (state = initialState, action) => {
  return state;
};
export default sidebarReducer;
