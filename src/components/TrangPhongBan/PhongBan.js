import React, { useEffect, useState } from "react";
import { fetchDepartmentStaffs } from "../../redux/ActionCreators";
import { Link } from "react-router-dom";
import { Loading } from "../Home/Loading";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HienThiPhongBan from "./HienThiPhongBan";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";

function RenderBreadcrumb() {
  return (
    <div>
      <h3 className="tieuDeTrang">Phòng Ban</h3>
      <Breadcrumb tag="nav" listtag="div">
        <BreadcrumbItem>
          <Link to="/phongban">Phòng Ban</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
function RenderNhanVien(props) {
  console.log(props);

  const department = props.departments.departments;
  console.log(department);
  const nameOfDepartment = department.map((phongban) => {
    if (phongban.id === props.departmentId) return phongban.name;
  });
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="col-6 col-md-4 col-lg-2 "
    >
      <Link
        to={"/nhanvienchitiet/" + props.nhanVienID}
        className="profile-card"
      >
        <img className="profile-img" src={props.image} alt={props.name}></img>
        <h4 className="user-name mt-1 mb-0">{props.name}</h4>
        <div className="user-bio">{nameOfDepartment}</div>
      </Link>
    </motion.div>
  );
}
function PhongBan(props) {
  console.log(props);

  // const [deptId, setDeptId] = useState(props.match.params.id);
  // if(deptId!=props.match.params.id) setDeptId(props.match.params.id);
  const departmentStaff = useSelector((state) => state.departmentstaffs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDepartmentStaffs(`departments/${props.match.params.id}`));
  }, [props.match.params.id]);

  if (props.departments.isLoading) return <Loading />;
  if (!props.departments.isLoading) {
    const department = props.departments.departments;
    if (!props.match.params.id) {
      const phongban = department.map((element, index) => {
        return (
          <HienThiPhongBan
            key={index}
            name={element.name}
            numberOfStaff={element.numberOfStaff}
            phongBanId={element.id}

          />
        );
      });
      return (
        <motion.div
          animate={{ y: 10 }}
          initial={{ y: 30 }}
          className="container mt-5"
        >
          <h3 className="tieuDeTrang">Phòng Ban</h3>
          <hr />
          <motion.div className="row">
            <AnimatePresence>{phongban}</AnimatePresence>
          </motion.div>
        </motion.div>
      );
    }
    if (props.match.params.id) {
      // console.log(props.match.params.id);
      // console.log(departmentStaff.isLoading);
      let staff = "";
      if (props.departmentstaffs.error) {
        console.log(props.departmentstaffs.error);
        return (
          <div className="container mt-5">
            <h3>{props.departmentstaffs.error}</h3>
            <hr/>
          </div>
        )
      }
      else {
        staff = departmentStaff.departmentstaffs.map((nhanVien) => {
          console.log(nhanVien);
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
      }
      return (
        <motion.div
          animate={{ y: 10 }}
          initial={{ y: 30 }}
          className="container mt-5"
        >
          <RenderBreadcrumb />
          <hr />
          <div className="row">{staff}</div>
        </motion.div>
      );
    }
  }
}

export default withRouter(PhongBan);
