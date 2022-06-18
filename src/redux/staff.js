import * as ActionTypes from "./ActionTypes";

const Staff = (state = { isLoading: true, staffs: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFF:
      return { ...state, isLoading: false, staffs: action.payload };

    case ActionTypes.STAFF_LOADING:
      return { ...state, isLoading: true, staffs: [] };

    default:
      return state;
  }
};

export default Staff;
