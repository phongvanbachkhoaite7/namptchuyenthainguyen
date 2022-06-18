import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addStaff = (staffList) => {
  console.log("add staffList ");
  return {
    type: ActionTypes.ADD_STAFF,
    payload: staffList,
  };
};

export const fetchStaff = () => (dispatch) => {
  fetch(baseUrl + "staffs")
    .then((res) => {
      if (res.ok) {
        return res;
      }
      if (!res.ok) {
        let error = new Error("Error " + res.status + ": " + res.statusText);
        throw error;
      }
    })
    .then((res) => res.json())
    .then((res) => {
      // console.log("dispatch "+JSON.stringify(res));
      dispatch(addStaff(res));
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const addDepartments = (departmentList) => {
  return {
    type: ActionTypes.ADD_DEPARTMENT,
    payload: departmentList,
  };
};
export const fetchDepartments = () => (dispatch) => {
  fetch(baseUrl + "departments")
    .then((res) => {
      if (res.ok) {
        return res;
      }
      if (!res.ok) {
        let error = new Error("Error " + res.status + ": " + res.statusText);
        throw error;
      }
    })
    .then((res) => res.json())
    .then((res) => {
      // console.log("dispatch "+JSON.stringify(res));
      dispatch(addDepartments(res));
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const addDepartmentStaffs = (departmentstaffs) => {
  return {
    type: ActionTypes.ADD_DEPARTMENT_STAFFS,
    payload: departmentstaffs,
  };
};
export const fetchDepartmentStaffs = (id) => (dispatch) => {
  fetch(baseUrl + id)
    .then((res) => {
      if (res.ok) {
        return res;
      }
      if (!res.ok) {
        let error = new Error("Error " + res.status + ": " + res.statusText);
        throw error;
      }
    })
    .then((res) => res.json())
    .then((res) => {
      // console.log("dispatch "+JSON.stringify(res));
      dispatch(addDepartmentStaffs(res));
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(failDepartmentsStaffs(err.message));
    });
};

export const addStaffsSalary = (staffsSalary) => {
  return {
    type: ActionTypes.ADD_STAFFS_SALARY,
    payload: staffsSalary,
  };
};
export const failDepartmentsStaffs = (error) => {
  return {
    type: ActionTypes.DEPARTMENT_STAFFS_FAIL,
    payload: error,
  };
};
export const fetchStaffsSalary = () => (dispatch) => {
  fetch(baseUrl + "staffsSalary")
    .then((res) => {
      if (res.ok) {
        return res;
      }
      if (!res.ok) {
        let error = new Error("Error " + res.status + ": " + res.statusText);
        throw error;
      }
    })
    .then((res) => res.json())
    .then((res) => {
      // console.log("dispatch "+JSON.stringify(res));
      dispatch(addStaffsSalary(res));
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const postData = (dispatch, newStaff) => {
  fetch(baseUrl + "staffs", {
    method: "POST",
    body: JSON.stringify(newStaff),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res;
      }
      if (!res.ok) {
        let error = new Error("Error " + res.status + ": " + res.statusText);
        throw error;
      }
    })
    .then((res) => res.json())
    .then((res) => {
      // console.log("dispatch "+JSON.stringify(res));
      dispatch(addStaff(res));
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const updateData = (dispatch, updateStaff) => {
  fetch(baseUrl + "staffs", {
    method: "PATCH",
    body: JSON.stringify(updateStaff),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res;
      }
      if (!res.ok) {
        let error = new Error("Error " + res.status + ": " + res.statusText);
        throw error;
      }
    })
    .then((res) => res.json())
    .then((res) => {
      // console.log("dispatch "+JSON.stringify(res));
      dispatch(addStaff(res));
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const deleteData = (dispatch, deleteStaffID) => {
  fetch(baseUrl + "staffs/"+deleteStaffID, {
    method: "DELETE",
    // body: JSON.stringify(deleteStaff),
    headers: { "Content-Type": "application/json" },
  })
    // .then((res) => {
    //   if (res.ok) {
    //     return res;
    //   }
    //   if (!res.ok) {
    //     let error = new Error("Error " + res.status + ": " + res.statusText);
    //     throw error;
    //   }
    // })
    .then((res) => res.json())
    .then((res) => {
      // console.log("dispatch "+JSON.stringify(res));
      dispatch(addStaff(res));
    })
    // .catch((err) => {
    //   console.log(err.message);
    // });
};
