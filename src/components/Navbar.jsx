import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { GoSearch } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import Logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import User  from "../assets/User.png"
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../slices/LogInSlice";

const MyNavbar = () => {
  const {isLoggedIn} = useSelector((state)=>state.LogInSlice)
  const [formType, setFormType] = useState("LogIn");
  const [modalShow, setModalShow] = React.useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const dispatch = useDispatch()

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  const formController = (formType) => {
    setModalShow(!modalShow)
    setFormType(formType);
    console.log(formType)
  };

  return (
    <Navbar bg="light" className="border-bottom dark fixed-top " variant="dark">
      <Container>
        {/* Left part for Company Name */}
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>

        {/* Hamburger icon for small screens */}
        <div
          id="hamburger-icon"
          className="d-md-none"
          onClick={toggleSearchModal}
        >
          <FaBars />
        </div>

        {/* Middle part for Search Bar */}
        <Form className="d-none d-md-flex position-relative ">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <IoIosSearch className="search" />
        </Form>

        {/* Right part for Login */}
        <Nav className="ml-auto d-none d-md-flex">
          {
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                {isLoggedIn ? (
                  <>
                   <img  height={25} className=" mx-2 " src={User}/>
                  Siddharth </>
                ) : (
                  <>
                    Create account.
                    <span className=" text-primary"> It's free</span>
                  </>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {isLoggedIn ? (
                  <Dropdown.Item href="#/action-1" onClick={()=>dispatch(setIsLoggedIn(false))}>Log Out</Dropdown.Item>
                ) : (
                  <>
                    <Dropdown.Item href="#/action-1">
                      <div value="LogIn" onClick={()=>formController("LogIn")}  >LogIn</div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={()=>formController("SignUp")}>
                      Sign Up
                    </Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          }
        </Nav>
      </Container>

      {/* Modal for small screens */}
      <Modal show={showSearchModal} onHide={toggleSearchModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column  gap-3 ">
          <Form className="d-flex ">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <GoSearch />
            </Button>
          </Form>
          <div>
            {isLoggedIn ? (
              <Button variant="outline-dark" >Log Out</Button>
            ) : (
              <div className=" d-flex   gap-2">
                <Button variant="outline-dark" onClick={()=>formController("LogIn")}  >Log In</Button>
                <Button variant="outline-dark"  onClick={()=>formController("SignUp")}>Sign Up</Button>
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>

      {/* form  */}
      <MyVerticallyCenteredModal
        show={modalShow}
        formType={formType} 
        onHide={() => setModalShow(false)}
      />

    </Navbar>
  );
};

export default MyNavbar;
