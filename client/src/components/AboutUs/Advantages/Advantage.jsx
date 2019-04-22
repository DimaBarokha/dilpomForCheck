import React from "react";
import {MDBCol} from "mdbreact";
import carriage from "../img/carriage.png";
import doctor from "../img/doctorPicture.png"
import syringe from "../img/syringe.png"

const Advantage = ({items}) => {
    return (
        <>
            <MDBCol md="4">
                <div className="about__intro__card">
                    <img className="about__intro__card-image" src={items.src} alt=""/>
                    <h2 className="about__intro__card-text">{items.title}</h2>
                    <hr className="hr-dark mt-2"/>
                    <p>{items.text}</p>
                </div>
            </MDBCol>
        </>
    );
};

export default Advantage;