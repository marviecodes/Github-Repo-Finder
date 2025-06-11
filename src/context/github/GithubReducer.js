const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
