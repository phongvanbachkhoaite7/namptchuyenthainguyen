import React from "react";
import { withRouter } from "react-router-dom";
import TrangNhanVien from "../TrangNhanVien/TrangNhanVien";
import NhanVienChiTiet from "../TrangNhanVien/NhanVienChiTiet";
import { Loading } from "./Loading";
function Home(props) {
  if (props.staffs.isLoading) {
    return <Loading />;
  }
  if (!props.staffs.isLoading) {
    if (!props.match.params.id) {
      return (
        <TrangNhanVien
          staffs={props.staffs.staffs}
          departments={props.departments}
        />
        // <Loading/>
      );
    }
    if (props.match.params.id) {
      return (
        <NhanVienChiTiet
          staffs={props.staffs.staffs}
          departments={props.departments}
        />
        // <Loading/>
      );
    }
  }
}
export default withRouter(Home);
