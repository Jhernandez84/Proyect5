export const types = {
    setUserState: 'SETUSER',
    setError: 'SETERROR', // Assuming you have defined this action type as well
    LOGOUT: 'LOGOUT', // Add a new action type for logout
};

const userReducer = (state, action = {}) => {
    switch (action.type) {
      case types.setUserState:
        return {
          ...state,
          user: action.payload,
          error: null,
        };
  
      case types.setError:
        return {
          ...state,
          error: action.payload,
        };
  
      case types.LOGOUT: // Use 'types.LOGOUT' to handle the logout action
        return {
          ...state,
          user: null,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  
  
  
  