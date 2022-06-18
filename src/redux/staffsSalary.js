
import * as ActionTypes from "./ActionTypes";
export const staffsSalary = (state = {isLoading:true, staffsSalary:[],}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFFS_SALARY:
      return{
        ...state,
        isLoading:false,
        staffsSalary:action.payload,
      }
      case ActionTypes.STAFFS_SALARY_LOADING:
        return{
          ...state,
          isLoading:true,
          staffsSalary:[],
        }
    default:
      return state;
  }
};