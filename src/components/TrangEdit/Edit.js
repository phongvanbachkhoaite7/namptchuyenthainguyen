import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Search from "./Search";
import TableData from "./TableData";
import AddStaffForm from "./AddStaffForm";

function Edit(props) {
  const [hienThiForm, setHienThiForm] = useState(false);
  const [staffEdit, setStaffEdit] = useState({});
  const [hienThiFormEdit, setHienThiFormEdit] = useState(false);

  function editStaff (staff){
    setStaffEdit(staff);
  }
  return (
    <motion.div
      animate={{ y: 10 }}
      initial={{ y: 30 }}
      className="container mt-5"
      
    >
      <h3 className="tieuDeTrang">Cập Nhật Thông Tin</h3>
      <hr />
      <Search staffEdit={staffEdit} changeEditUserStatus={()=>setHienThiFormEdit(!hienThiFormEdit)} editUserStatus={hienThiFormEdit} ketNoi={() => setHienThiForm(!hienThiForm)} hienThiForm={hienThiForm} staffs={props.staffs.staffs} departments={props.departments.departments} />

      <div className="row card-view-without-link">

        <TableData changeEditUserStatus={()=>setHienThiFormEdit(!hienThiFormEdit)} editFun={(staff)=>editStaff(staff)} staffs={props.staffs.staffs} departments={props.departments.departments} />
        <AddStaffForm hienThiForm={hienThiForm} staffs={props.staffs.staffs} departments={props.departments.departments} />

      </div>
    </motion.div>
  );
}
export default Edit;
