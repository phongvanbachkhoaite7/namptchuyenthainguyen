import React, { useEffect } from "react";
import "./App.css";
import { useLocation } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer";
import {
  fetchDepartments,
  fetchStaff,
  fetchStaffsSalary,
} from "./redux/ActionCreators";
// import store from "./redux/ConfigureStore";
// import NhanVienChiTiet from "./components/TrangNhanVien/NhanVienChiTiet";

import PhongBan from "./components/TrangPhongBan/PhongBan";
import BangLuong from "./components/TrangBangLuong/BangLuong";
import Edit from "./components/TrangEdit/Edit";
function App() {
  const staffs = useSelector((state) => state.staff);
  const departments = useSelector((state) => state.department);
  const departmentstaffs = useSelector((state) => state.departmentstaffs);
  const staffsSalary = useSelector((state) => state.staffssalary);
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log("location la " + JSON.stringify(location));
  useEffect(() => {
    dispatch((dispatch) => {
      dispatch(fetchStaff());
      dispatch(fetchDepartments());
      dispatch(fetchStaffsSalary());
    });
  }, []);
  // console.log("appjs staffs " + JSON.stringify(staffs));
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/nhanvien">
          <Home staffs={staffs} departments={departments} />
        </Route>
        <Route exact path="/nhanvienchitiet/:id">
          <Home staffs={staffs} departments={departments} />
        </Route>
        <Route exact path="/phongban">
          <PhongBan staffs={staffs} departments={departments} />
        </Route>
        <Route exact path="/nhanvienphongban/:id">
          <PhongBan
            staffs={staffs}
            departments={departments}
            departmentstaffs={departmentstaffs}
          />
        </Route>
        <Route exact path="/bangluong">
          <BangLuong
            staffs={staffs}
            departments={departments}
            staffsSalary={staffsSalary}
          />
        </Route>
        <Route exact path="/capnhatthongtin">
          <Edit
            staffs={staffs}
            departments={departments}
            staffsSalary={staffsSalary}
          />
        </Route>
        <Redirect from="/" to="nhanvien" />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
