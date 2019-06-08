import React from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Stepps from './Stepper'
import Header from './stepData/Header'

export default class Index extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <main style={{backgroundColor: "#eceff1", height: '100%'}}>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="12" lg="12" xl="12" className="">
                                <Stepps/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </main>
            </>
        );
    }
}
