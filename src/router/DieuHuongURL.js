import React, { useState,useEffect  } from "react";
import {  Switch, Route } from "react-router-dom";
import BangLuong from "../components/TrangBangLuong/BangLuong";
import NhanVienChiTiet from "../components/TrangNhanVien/NhanVienChiTiet";
import PhongBan from "../components/TrangPhongBan/PhongBan";
import TrangNhanVien from "../components/TrangNhanVien/TrangNhanVien";
// import { STAFFS } from "../shared/staffs";
// import { DEPARTMENTS } from "../shared/staffs";
import { connect,useSelector, useDispatch } from "react-redux";
import { fetchStaffs } from "../redux/ActionCreators";
// Component rieng de dieu huong router
const mapStateToProps = (state, ownProps) => {
  return {
    staffList: state.staffs,
    departmentList:state.departments
  }
}

 function DieuHuongURL(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((dispatch) => {
      dispatch(fetchStaffs("staffList"));
      // dispatch(fetchData("departments"));
      // dispatch(fetchData("staffsSalary"));
    });
  }, []);
  const [staffList, setStaffList] = useState(props.staffList);
  const [departmentList, setDepartmentList] = useState(props.departmentList);
  function recieveStaffList(staff){
    setStaffList(staff);
  }
  function recieveDepartmentList(department){
    console.log("da lien ket tu dieu huong den nhan vien");
    setDepartmentList(department);
  }
  // console.log(departmentList);
  return (
    <div>
      <hr />
      <Switch>
        <Route exact path="/nhanvien">
          <TrangNhanVien staffs={staffList} departments={departmentList} recieveStaffList ={(staffList)=>recieveStaffList(staffList)} recieveDepartmentList={(departmentList)=>recieveDepartmentList(departmentList)} />
        </Route>
        <Route exact path="/">
        <TrangNhanVien staffs={staffList} departments={departmentList} recieveStaffList ={(staffList)=>recieveStaffList(staffList)} recieveDepartmentList={(departmentList)=>recieveDepartmentList(departmentList)}/>
        </Route>
        <Route exact path="/nhanvienchitiet/:id">
          <NhanVienChiTiet staffList={staffList}  />
        </Route>
        <Route exact path="/phongban">
          <PhongBan departmentList={departmentList}  />
        </Route>
        <Route exact path="/bangluong">
          <BangLuong staffs={staffList}  />
        </Route>   
      </Switch>
      <hr />
    </div>
  );
}


// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     addDataStore: (getItem) => {
//       dispatch({type:"ADD_DATA", getItem})
//     }
//   }
// }
export default connect(mapStateToProps)(DieuHuongURL);

