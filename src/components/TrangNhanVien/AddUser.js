import React, { useState } from "react";
// import { DEPARTMENTS } from "../../shared/staffs";
function AddUser(props) {
  //   let [newStaff, setNewStaff] = useState({
  //     image: "/assets/images/alberto.png",
  //   });

  //   let staffList = [...props.currentStaffList];
  //   let departmentList = [...props.currentDepartmentList];
  //   let [nameError, setNameError] = useState("");
  //   let [doBError, setDoBError] = useState("");
  //   let [startDateError, setStartDateError] = useState("");
  //   let [salaryScaleError, setSalaryScaleError] = useState("");
  //   let [annualLeaveError, setAnnualLeaveError] = useState("");
  //   let [overTimeError, setOverTimeError] = useState("");
  //   let [departmentError, setDepartmentError] = useState("");
  //   let [isDisabled, setIsDisable] = useState(true);
  // // console.log(departmentList);
  //   function SendAddedUser() {
  //     if (isDisabled === true) {
  //       alert("Yêu cầu nhập đầy đủ thông tin nhân viên mới!");
  //     } else {
  //       newStaff.id=staffList.length;
  //       setNewStaff(newStaff);
  //       staffList.push(newStaff);
  //       props.getNewStaffList(staffList);
  //       props.getNewDepartmentList(departmentList);
  //       alert("Thêm thành công nhân viên: "+newStaff.name + " - Mã ID: "+newStaff.id);
  //     }
  //   }
  //   function isChange(e) {
  //     let name = e.target.name;
  //     let value = e.target.value;
  //     checkValid(name, value);
  //   }
  //   function checkValid(name, value) {
  //     setIsDisable(false);
  //     if (name === "name") {
  //       console.log("name la "+value);
  //       console.log("do dai " +value.length);
  //       if ( value===""|| value.length < 4 || value.length > 30 ) {
  //         setIsDisable(true);
  //         setNameError("Yêu cầu nhập nhiều hơn 3 ký tự và ít hơn 30 ký tự");
  //       } else {
  //         setNameError("");
  //         newStaff[name] = value;
  //         console.log(newStaff);
  //       }
  //     }
  //     if (name === "doB") {
  //       if (value === "") {
  //         setIsDisable(true);
  //         setDoBError("Yêu cầu bắt buộc");
  //       } else {
  //         setDoBError("");
  //         newStaff[name] = value;
  //         console.log(newStaff);
  //       }
  //     }
  //     if (name === "startDate") {
  //       if (value === "") {
  //         setIsDisable(true);
  //         setStartDateError("Yêu cầu bắt buộc");
  //       } else {
  //         setStartDateError("");
  //         newStaff[name] = value;
  //         console.log(newStaff);
  //       }
  //     }
  //     if (name === "department") {
  //       if (value === "") {
  //         setIsDisable(true);
  //         setDepartmentError("Yêu cầu bắt buộc");
  //       } else {
  //         setDepartmentError("");
  //         departmentList[Number(value)].numberOfStaff++;
  //         newStaff[name] = props.currentDepartmentList[Number(value)];
  //         console.log(newStaff);
  //       }
  //     }
  //     if (name === "salaryScale") {
  //       if (Number(value) && Number(value) >= 1 && Number(value) <= 3) {
  //         setSalaryScaleError("");
  //         newStaff[name] = Number(value);
  //       } else {
  //         setIsDisable(true);
  //         setSalaryScaleError("Yêu cầu nhập số từ 1-3");
  //       }
  //     }
  //     if (name === "annualLeave") {
  //       if (Number(value)) {
  //         setAnnualLeaveError("");
  //         newStaff[name] = Number(value);
  //       } else {
  //         setIsDisable(true);
  //         setAnnualLeaveError("Yêu cầu nhập số");
  //       }
  //     }
  //     if (name === "overTime") {
  //       if (Number(value)) {
  //         setOverTimeError("");
  //         newStaff[name] = Number(value);
  //       } else {
  //         setIsDisable(true);
  //         setOverTimeError("Yêu cầu nhập số");
  //       }
  //     }
  //   }
  return (
    <div className="col-12 col-md-4">
      {/* Button trigger modal */}
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Thêm Nhân Viên
      </button>
      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Thêm Nhân Viên
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {/* _____________ _____________ADD name UserName _____________ _____________*/}
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Tên</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Tên nhân viên.."
                      // onBlur={(event) => isChange(event)}
                    />
                  </div>
                  {/* <span className="text-danger">{nameError}</span> */}
                </div>
                {/* _____________ _____________ADD doB ngày sinh _____________ _____________*/}
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Ngày sinh</label>
                  <div className="col-sm-8">
                    <input
                      type="date"
                      className="form-control"
                      id="doB"
                      name="doB"
                      // onBlur={(event) => isChange(event)}
                    />
                  </div>
                  {/* <span className="text-danger">{doBError}</span> */}
                </div>
                {/* _____________ _____________ADD startDate Ngày vào công ty _____________ _____________*/}
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">
                    Ngày vào công ty
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="date"
                      className="form-control"
                      id="startDate"
                      name="startDate"
                      // onBlur={(event) => isChange(event)}
                    />
                  </div>
                  {/* <span className="text-danger">{startDateError}</span> */}
                </div>
                {/* _____________ _____________ADD department phòng ban _____________ _____________*/}
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Phòng ban</label>
                  <div className="col-sm-8">
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                      name="department"
                      defaultValue={""}
                      // onBlur={(event) => isChange(event)}
                    >
                      <option value="" disabled>
                        Chọn phòng ban
                      </option>
                      <option value="0">Sale</option>
                      <option value="1">HR</option>
                      <option value="2">Marketing</option>
                      <option value="3">IT</option>
                      <option value="4">Finance</option>
                    </select>
                  </div>
                  {/* <span className=" text-danger">{departmentError}</span> */}
                </div>
                {/* _____________ _____________ADD salaryScale hệ số lương _____________ _____________*/}
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Hệ số lương</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="salaryScale"
                      name="salaryScale"
                      placeholder="Hệ số lương.."
                      // onBlur={(event) => isChange(event)}
                    />
                  </div>
                  {/* <span className="text-danger">{salaryScaleError}</span> */}
                </div>
                {/* _____________ _____________ADD annualLeave số ngày nghỉ còn lại _____________ _____________*/}
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">
                    Số ngày nghỉ còn lại
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="Số ngày nghỉ còn lại.."
                      // onBlur={(event) => isChange(event)}
                    />
                  </div>
                  {/* <span className="text-danger">{annualLeaveError}</span> */}
                </div>
                {/* _____________ _____________ADD overTime số ngày đã làm thêm _____________ _____________*/}
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">
                    Số ngày đã làm thêm
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="overTime"
                      name="overTime"
                      placeholder="Số ngày đã làm thêm.."
                      // onBlur={(event) => isChange(event)}
                    />
                  </div>
                  {/* <span className="text-danger">{overTimeError}</span> */}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                // onClick={() => SendAddedUser()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
