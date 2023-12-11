import React, { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import linkedin from './linkedin.png'
import github from './Github.png'
import instagram from './instagram.png'
import gif from './Gif.gif';
import { motion } from 'framer-motion';


export default function PersonalProfile(props) {
  const [isgif,setIsgif]=useState(true);

  setTimeout(()=>{
setIsgif(false)
  },1700)
  return (
  //  <div className=' ' style={{width:'50%'}}>
    <motion.div animate={{marginTop:'25px',width:'50%'}}>
      <MDBContainer className=" h-100 w-full" >
        <MDBRow className=" h-100">
          <MDBCol lg="6" className="mb-2 mb-lg-0 w-full ">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white bg-blue-100"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={isgif ? gif:props.img}
                    alt="Avatar" className="mt-4 ml-10 mb-4 rounded-full mx-auto border-4 border-white " style={{ width: '150px',height:'150px' }} fluid />
                  <MDBTypography  className='text-xl text-black'>{props.name}</MDBTypography><br />
                  <MDBCardText className='text-xm text-black'><u>Web Developer</u></MDBCardText><br />
               
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography className='text-black text-xl '>Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    {/* <MDBRow className="pt-1"> */}
                      <MDBCol size="6" className="mb-3  w-full">
                        <MDBTypography className="text-black text-xm"><b>Email</b></MDBTypography>
                        <MDBCardText className="text-xm">{props.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3 w-full">
                        <MDBTypography className="text-black text-xm"><b>Phone</b></MDBTypography>
                        <MDBCardText className="text-muted">{props.number}</MDBCardText>
                      </MDBCol>
                    {/* </MDBRow> */}

                  

                    <div className="d-flex justify-content-start text-center mt-16">
                      <a href={props.linkiden} style={{marginLeft:'25%'}} ><img src={linkedin} width={30} alt="linkden" /></a>
                      <a href={props.github} className='ml-4'><img src={github} width={30} alt="github" /></a>
                      <a href={props.instagram} className='ml-4' style={{marginRight:'25%'}}><img src={instagram} width={30} alt="instagram" /></a>

                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </motion.div>
  // </div>
  );
}