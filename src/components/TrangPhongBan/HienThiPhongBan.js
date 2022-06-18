import React from 'react'
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
function HienThiPhongBan(props) {
    return (
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout  className="col-12 col-md-6 col-lg-4">
        <Link to={"/nhanvienphongban/" + props.phongBanId}>
          <div className="card-view">
            <h2>{props.name}</h2>
            <p>Số lượng nhân viên: {props.numberOfStaff}</p>
          </div>
        </Link>
      </motion.div>
    );
  }
export default HienThiPhongBan;