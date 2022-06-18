import * as ActionTypes from "./ActionTypes";
export const Departments = (state = {isLoading:true, departments:[],}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENT:
      return{
        ...state,
        isLoading:false,
        departments:action.payload,
      }
      case ActionTypes.DEPARTMENT_LOADING:
        return{
          ...state,
          isLoading:true,
          departments:[],
        }
    default:
      return state;
  }
};