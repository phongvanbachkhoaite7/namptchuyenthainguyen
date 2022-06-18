import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import AddUser from "./AddUser";
import { motion, AnimatePresence } from "framer-motion";
//--------functionalComponent--------
function RenderBreadcrumb() {
  return (
    <div className="container">
      <h3 className="tieuDeTrang">Trang Nhân Viên</h3>
      <Breadcrumb tag="nav" listtag="div">
        <BreadcrumbItem>
          <Link to="/nhanvien">Nhân Viên</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
function RenderNhanVien(props) {
  const department = props.departments.departments;
  // console.log(department);
  const nameOfDepartment = department.map((phongban) => {
    if (phongban.id === props.departmentId) return phongban.name;
  });
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className="col-6 col-md-4 col-lg-2 ">
      <Link
        to={"/nhanvienchitiet/" + props.nhanVienID}
        className="profile-card"
      >
        <img className="profile-img" src="https://dangkytuyensinh.hust.edu.vn/api/files/2022/4/16/1650099017167.1321720245782..jpg" alt={props.name}></img>
        <h4 className="user-name mt-1 mb-0">{props.name}</h4>
        <div className="user-bio">{nameOfDepartment}</div>
      </Link>
    </motion.div>
  );
}
function FilterDept({ setActiveDept, activeDept, setFilteredStaff, staffs }) {
  function filteredDept(DeptId) {
    setActiveDept(DeptId);
    if (DeptId === 'All') {
      setFilteredStaff(staffs);
      return;
    }
    const filtered = staffs.filter((staff) => staff.departmentId === (DeptId));
    setFilteredStaff(filtered);
    return;
    // console.log(filtered);
  }
  

  return (
    <div className="filter-container container">
      <button
        className={activeDept === 'All' ? "active" : ""}
        onClick={() => filteredDept('All')}>All</button>
      <button
        className={activeDept === 'Dept01' ? "active" : ""}
        onClick={() => filteredDept('Dept01')}>Sale</button>
      <button
        className={activeDept === 'Dept02' ? "active" : ""}
        onClick={() => filteredDept('Dept02')}>HR</button>
      <button
        className={activeDept === 'Dept03' ? "active" : ""}
        onClick={() => filteredDept('Dept03')}>Marketing</button>
      <button
        className={activeDept === 'Dept04' ? "active" : ""}
        onClick={() => filteredDept('Dept04')}>IT</button>
      <button
        className={activeDept === 'Dept05' ? "active" : ""}
        onClick={() => filteredDept('Dept05')}>Finance</button>
    </div>
  );
}
function TrangNhanVien(props) {
  const [staffList, setStaffList] = useState(props.staffs);
  const [filteredStaff, setFilteredStaff] = useState(props.staffs);
  const [activeDept, setActiveDept] = useState('All');
  // function getNewStaffList(staff) {
  //   setStaffList(staff);
  //   setFilteredStaff(staff);
  //   console.log("da nhan lien ket tu ham add user");
  //   //gui du lieu cho dieu huong
  //   props.recieveStaffList(staff);
  // }
  // function getNewDepartmentList (department) {
  //   //gui du lieu cho dieu huong
  //     props.recieveDepartmentList(department);
  //  }
  function RenderSearch() {
    const input = useRef(null);
    return (
      <div className="col-12 col-md-8">
        <div className="form-group">
          <div className="btn-group">
            <input
              type="text"
              className="search-input"
              placeholder="Nhập tên cần tìm.."
              ref={input}
            ></input>
            <div
              className="btn search-btn"
              onClick={() => textSearch(input.current.value)}
            >
             <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function textSearch(text) {
    if (text === "") {
    } else {
      var filteredStaff = staffList.filter((staff) =>
        staff.name.toLowerCase().includes(text.toString().toLowerCase())
      );
      //   console.log(filteredStaff);
      setFilteredStaff(filteredStaff);
    }
  }

  const staff = filteredStaff.map((nhanVien) => {
    // console.log("tnv "+JSON.stringify(nhanVien.id));
    return (
      <RenderNhanVien
        key={nhanVien.id}
        nhanVienID={nhanVien.id}
        image={nhanVien.image}
        name={nhanVien.name}
        departmentId={nhanVien.departmentId}
        departments={props.departments}
      />
    );
  });
  return (
    <motion.div  animate={{ y: 10 }} initial={{ y: 30 }}   className="container mt-5">
      <div className="row">
        <RenderBreadcrumb />
      </div>
      <div className="row">
        <RenderSearch />
         {/* <AddUser
          // getNewStaffList={(staff) => getNewStaffList(staff)}
          // getNewDepartmentList={(department)=>getNewDepartmentList(department)}
          // currentStaffList={staffList}
          // currentDepartmentList={props.departments}
        /> */}
        <FilterDept staffs={props.staffs} setFilteredStaff={setFilteredStaff} activeDept={activeDept} setActiveDept={setActiveDept} />

       
      </div>

      <hr />
      <motion.div layout className="row">
        <AnimatePresence>
          {staff}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default TrangNhanVien;
