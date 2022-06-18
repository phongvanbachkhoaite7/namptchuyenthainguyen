import * as ActionTypes from "./ActionTypes";
export const Departmentstaffs = (
  state = { isLoading: true, departmentstaffs: [], error: null },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENT_STAFFS:
      return {
        ...state,
        isLoading: false,
        departmentstaffs: action.payload,
        error: null,
      };
    case ActionTypes.DEPARTMENT_STAFFS_LOADING:
      return {
        ...state,
        isLoading: true,
        departmentstaffs: [],
        error: null,
      };
    case ActionTypes.DEPARTMENT_STAFFS_FAIL:
      return {
        ...state,
        isLoading: true,
        departmentstaffs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
