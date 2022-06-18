import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// --------Salary cal--------
import { Loading } from "../Home/Loading";
function TinhLuong(salaryScale, overTime) {
  const basicSalary = 3000000;
  const overTimeSalary = 200000;
  return (
    salaryScale * basicSalary +
    overTime * overTimeSalary
  ).toLocaleString();
}
// --------presentation component--------
function HienThiBangLuong(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className=" card-view-without-link"
      >
        <h3>{props.name}</h3>
        <p>Mã nhân viên: {props.id}</p>
        <p>Hệ số lương: {props.salaryScale}</p>
        <p>Số giờ làm thêm: {props.overTime}</p>
        <p>Lương: {TinhLuong(props.salaryScale, props.overTime)}</p>
        {/* <p>Lương: {props.salary.toLocaleString()}</p> */}
      </motion.div>
    </div>
  );
}
// --------container component--------

function BangLuong(props) {
  console.log(props);
  if (props.staffs.isLoading) return <Loading />;
  else
    return (
      <motion.div  animate={{ y: 10 }} initial={{ y: 30 }}  className="container mt-5">
        <h3 className="tieuDeTrang">Bảng Lương</h3>
        <hr />
        <motion.div className="row">
          <AnimatePresence>
            {props.staffsSalary.staffsSalary.map((element, index) => {
              return (
                <HienThiBangLuong
                  key={index}
                  name={element.name}
                  id={element.id}
                  overTime={element.overTime}
                  salaryScale={element.salaryScale}
                  salary={element.salary}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    );
}

export default BangLuong;
