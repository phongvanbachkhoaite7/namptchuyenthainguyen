import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div >
                <Navbar dark expand="md" >
                    <div className="container-fluid ">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/nhanvien"><img src='assets/images/logo.png' height="30" width="41" alt='Ứng Dụng Quản Lý Nhân sự' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link menu" activeClassName='active' to='/nhanvien'> <i className="fa fa-users" aria-hidden="true"></i> Nhân Viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link menu" activeClassName='active' to='/phongban'><i className="fa fa-id-card-o" aria-hidden="true"></i> Phòng Ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link menu" activeClassName='active' to='/bangluong'><i className="fa fa-money" aria-hidden="true"></i> Bảng Lương</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link menu" activeClassName='active' to='/capnhatthongtin'><i className="fa fa-edit"></i> Cập Nhật Thông Tin</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;