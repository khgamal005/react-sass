import React from "react"
import SideContent from "../side/SideContent"
import { Outlet } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"

export const Home = () => {
  return (
    <>
{/* <Container fluid> */}
<Row className="main-div">
    <Col sm={12} xs={12} md={5} lg={4}>
   <div className="side ">
   <SideContent/>
   </div>
    </Col>
    <Col sm={12} xs={12} md={7} lg={8}  >
    <div className="main-x">
    <Outlet/>
    </div>
      </Col>
  </Row>
  
{/* </Container > */}
  
  
      
    </>
  )
}
export default Home