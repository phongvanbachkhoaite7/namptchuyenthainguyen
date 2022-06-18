import React, { useState } from "react";
import EditStaffForm from "./EditStaffForm";

export default function Search(props) {
  console.log(props);
  function isShowEditForm() {
    if (props.editUserStatus === true) {
      return (
        <EditStaffForm
        staffEdit={props.staffEdit}
          changeEditUserStatus={() => props.changeEditUserStatus}
          hienThiForm={true}
          staffs={props.staffs}
          departments={props.departments}
        />
      );
    }
  }
  const hienThiNut = () => {
    if (props.hienThiForm === true) {
      return (
        <div
          className="btn btn-block btn-outline-secondary mb-2 mt-2"
          onClick={() => props.ketNoi()}
        >
          Đóng form thêm nhân viên
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-block btn-outline-info mb-2 mt-2"
          onClick={() => props.ketNoi()}
        >
          Thêm nhân viên mới
        </div>
      );
    }
  };
  return (
    <div className="col-12">
      {isShowEditForm()}
      {hienThiNut()}
    </div>
  );
}
