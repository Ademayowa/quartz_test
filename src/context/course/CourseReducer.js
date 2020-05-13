export default (state, action) => {
  switch (action.type) {
    case 'GET_COURSES':
      return {
        ...state,
        courses: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
