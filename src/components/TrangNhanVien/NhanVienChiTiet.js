import React from "react";
import {
withRouter
} from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import dateFormat from "dateformat";
function tenPhongBan(maPhongBan) {
  switch (maPhongBan) {
    case "Dept01":
      return "Sale";
    case "Dept02":
      return "HR";
    case "Dept03":
      return "Marketing";
    case "Dept04":
      return "IT";
    case "Dept05":
      return "Finance";

    default:
      return maPhongBan;
  }
}
// --------presentation component--------
function HienThiAnh(props) {
  return (
    <div className="col-12 col-md-4 col-lg-3 profile-view-img">
      <img className="" src={props.image} alt={props.name} />
    </div>
  );
}
function HienThiThongTin(props) {
  // console.log("chitiet: "+ JSON.stringify(props));
  return (
    <div className="col-12 col-md-8 col-lg-9">
        <ul>
            <li>
                <span className="title ">Họ và tên:</span>
                <span className="text ">{props.name}</span>
            </li>
            <li>
                <span className="title ">Ngày sinh:</span>
                <span className="text">{dateFormat(props.doB, "dd/mm/yyyy")}</span>
            </li>
            <li>
                <span className="title">Ngày vào công ty: </span>
                <span className="text">{dateFormat(props.startDate, "dd/mm/yyyy")}</span>
            </li>
            <li>
                <span className="title">Phòng ban: </span>
                <span className="text">{tenPhongBan(props.department)}</span>
            </li>
            <li>
                <span className="title">Số ngày nghỉ còn lại:</span>
                <span className="text">{props.annualLeave}</span>
            </li>
            <li>
                <span className="title">Số ngày đã làm thêm: </span>
                <span className="text">{props.overTime}</span>
            </li>
        </ul>
    </div>
  );
}
// --------container component--------

 function NhanVienChiTiet(props) {
  //  let a = props.staffList;
  // console.log("chitiet: "+ JSON.stringify(props));
  let a = [parseInt(props.match.params.id,10)];
  console.log(props.staffs);
  const selectedStaff = props.staffs.filter((nhanVien) => nhanVien.id==a);
  const staff=selectedStaff[0];
  // let staff = props.staffs[a];
  // console.log("nvct "+JSON.stringify(staff));
  // console.log("nvct props"+JSON.stringify(props.staffs));
  // const department=props.departments.departments;

  // const nameOfDepartment=department.map((phongban)=>{
  //   if(phongban.id===staff.departmentId) return phongban.name;
    
  // });
  // console.log(nameOfDepartment);
  return (
    <div className="container mt-5">
         <h3 className="tieuDeTrang">Nhân Viên Chi Tiết</h3>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem>
          <Link to="/nhanvien">Nhân Viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>{staff.name}</BreadcrumbItem>
      </Breadcrumb>
     
      <hr />

      <div className="row card-view-without-link">
        <HienThiAnh image={staff.image} name={staff.name} />
        <HienThiThongTin
          name={staff.name}
          doB={staff.doB}
          startDate={staff.startDate}
          annualLeave={staff.annualLeave}
          overTime={staff.overTime}
          department={staff.departmentId}
        />
      </div>
    </div>
  );
}

export default withRouter(NhanVienChiTiet);
