import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from '../CSS/footer.module.css';

const Footer = () => {
    return (
        < div >

            <div className="footer py-5 text-center" style={{ backgroundColor: "#2c3e50", padding: "10rem 0", color: "#fff", marginTop: "100px" }}>

                <div className="container">

                    <div className="row">


                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <NavLink to="/contact" className="lead text-white nav-link my-mouse-hover" >
                                Contact us
                        </NavLink>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">

                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <NavLink to="/about" className="lead text-white nav-link my-mouse-hover" >
                                About us
                        </NavLink>
                        </div>



                    </div>
                </div>
            </div>

            <div className="copyright py-4 text-center text-white" style={{ backgroundColor: "#808080" }}>
                <div className="container">
                    <small>Copyright &copy; ECommerceTask 2020</small>
                </div>
            </div>
        </div >
    );
};

export default Footer;