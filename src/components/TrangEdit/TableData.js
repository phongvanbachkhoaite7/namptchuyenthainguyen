import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
function TableDataRow(props) {
  function editClick() {
    props.editFunClick();
    props.changeEditUserStatus();
  }
  return (
    <tr>
      <td className="col-1 col-md-2 text-center">{props.staff.id}</td>
      <td className="col-4 col-md-4  text-center">{props.staff.name}</td>
      <td className="col-3 col-md-4  text-center">
        {tenPhongBan(props.staff.departmentId)}
      </td>
      <td className="col-4 col-md-2  text-center">
        <div className="btn-group">
          <div className="btn btn-warning sua" onClick={() => editClick()}>
            <i className="fa fa-edit" />
            Sửa
          </div>
        </div>
      </td>
    </tr>
  );
}

export default function TableData(props) {
  console.log(props);

  const staff = props.staffs.map((staff) => {
    return (
      <TableDataRow
        changeEditUserStatus={() => props.changeEditUserStatus()}
        editFunClick={() => props.editFun(staff)}
        staff={staff}
      />
    );
  });
  return (
    <motion.div  animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}   className="col">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="col-1 col-md-2 text-center">ID</th>
            <th className="col-4 col-md-6  text-center">Họ và tên</th>
            <th className="col-4 col-md-6  text-center">Mã phòng ban</th>
            <th className="col-7 col-md-4  text-center">Thao tác</th>
          </tr>
        </thead>
        <tbody>{staff}</tbody>
      </table>
    </motion.div>
  );
}
