import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import {NavLink} from "react-router-dom";
import logo from "../../logo.png";
import React from "react";

export default Header => {
    return (
        <header>
            <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                <MDBRow className="mt-4">
                    <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                        <NavLink to='/'>
                            <h6 className="text-uppercase font-weight-bold">
                                <img src={logo} alt="На главную"/>
                            </h6>
                        </NavLink>
                    </MDBCol>
                    <MDBCol md="4" lg="4" xl="4" className="mb-4 dark-grey-text">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Адрес</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                            style={{width: "60px"}}/>
                        <p>
                            <i className="fa fa-home mr-3"/> г. Минск. ул. Колотушкина 26, 24003, BY
                        </p>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3" className="mb-4 dark-grey-text">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Регистратура</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                            style={{width: "60px"}}/>
                        <p>
                            <i className="fa fa-phone mr-3"/> +375 (29) 289-32-99
                        </p>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3" className="mb-4 dark-grey-text">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Время работы</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                            style={{width: "60px"}}/>
                        <p>
                            <span className="">пн-пт:</span> 08:00-19:00
                            <br/>
                            <span className="">cб:</span>10:00-17:00
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </header>
    )
}