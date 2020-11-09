import React from "react";
import firstImage from '../Assets/1/600.png';
import secImage from '../Assets/2/400.png';
import thirdImage from '../Assets/3/600.png';
import styles from '../CSS/landingPage.module.css';

const LandingPage = () => {
    return (
        <div className="first" style={{ margin: "50px" }}>
            <div className="row" >
                <div className="col-12 col-sm-6">
                    <h3>Explore our beautiful products</h3>
                </div>
                <div className="col-12 col-sm-6">
                    <img src={firstImage} />
                </div>
            </div>

            <div className="row" style={{ marginTop: "200px" }}>
                <div className="col-12 col-sm-6">
                    <h3>Order products from anywhere , anytime</h3>
                </div>
                <div className="col-12 col-sm-6">
                    <img src={secImage} />
                </div>
            </div>


            <div className="row" style={{ marginTop: "200px" }}>
                <div className="col-12 col-sm-6">
                    <h3>Differnt types of products</h3>
                </div>
                <div className="col-12 col-sm-6">
                    <img src={thirdImage} />
                </div>
            </div>


            <div className="row" style={{ marginTop: "200px" }}>
                <div className="col-12 col-sm-6">
                    <h3>Low Price</h3>
                </div>
                <div className="col-12 col-sm-6">
                    <img src={firstImage} />
                </div>
            </div>


        </div>
    );
};

export default LandingPage;