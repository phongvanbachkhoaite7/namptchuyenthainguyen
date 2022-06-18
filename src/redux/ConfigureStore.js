import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import Staff from "./staff";
import { Departments } from "./departments";
import { Departmentstaffs } from "./departmentStaffs";
import {staffsSalary} from "./staffsSalary";
const store = createStore(
  combineReducers({
    staff: Staff,
    department: Departments,
    departmentstaffs: Departmentstaffs,
    staffssalary:staffsSalary,
  }),
  applyMiddleware(thunk, logger)
);
export default store;
