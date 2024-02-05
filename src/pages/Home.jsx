import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import Image1 from "../assets/blog1.png";
import Image2 from "../assets/blog2.png";
import Image3 from "../assets/blog3.png";
import User from "../assets/User.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import {setIsLoggedIn} from "../slices/LogInSlice"


const data = [
  {
    image: Image1,
    category: "Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: "Sarthak Kamra",
    views: "1.4k",
    User:User
  },
  {
    image: Image2,
    category: "Education",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: "Sarah west",
    views: "1.4k",
    User:User
  },
  {
    image: Image3,
    category: "MeetUp",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: "Sarthak Kamra",
    views: "1.8k",
    User:User
  },
  {
    image: Image3,
    category: "MeetUp",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    date:"Fri, 12 Oct, 2018",
    location:"Ahmedabad, India",
    author: "Sarthak Kamra",
    views: "1.8k",
    User:User
  },
];

const groupData=[
  {
    image:User,
    name:"Leisure"
  },
  {
    image:User,
    name:"Leisure"
  },
  {
    image:User,
    name:"Leisure"
  },
]

const Home = () => {
  const {isLoggedIn} = useSelector((state)=>state.LogInSlice)
  const dispatch = useDispatch();
  
  const [location, setLocation] = useState("Noida");
  const changeHandler = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div>
      <Container fluid className="bg-container">
        <Row>
          <Col>
            <div className="text-box">
              <p className=" fs-3 ">Computer Engineering</p>
              <p>142,765 Computer Engineers follow this</p>
            </div>
            <div className="homeButton ">
            <Button
              className=""
              variant="secondary"
            >
              {isLoggedIn ? "Leave group" : "Join Group"}
            </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <div>
        <div className=" d-flex border-bottom pb-2    justify-content-between my-3  w-75 mx-auto  ">
          <div className=" d-flex  gap-4">
            <span className=" fw-bold border-bottom border-2 border-dark  ">
              All Post(32)
            </span>
            <div className="  d-md-flex  gap-4 d-none ">
              <span>Article</span>
              <span>Event</span>
              <span>Education</span>
              <span>Job</span>
            </div>
          </div>
          <div className=" d-flex gap-2">
            <Dropdown>
              <Dropdown.Toggle
                className="d-md-block d-none"
                variant="secondary"
                id="dropdown-basic"
              >
                Write a Post
              </Dropdown.Toggle>
              <Dropdown.Toggle
                className="d-md-none d-block"
                variant="secondary"
                id="dropdown-basic"
              >
                Filter :All
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button
              className="d-md-block d-none"
              variant={!isLoggedIn ? "primary" : "light"}
            >
              {isLoggedIn ? "Leave group" : "Join Group"}
            </Button>
          </div>
        </div>

        <div className=" w-75 mx-auto pb-5 d-flex  justify-content-between  ">
          <div className="d-flex flex-column  gap-3  w-md-75 w-100 ">
            {data.map((data, index) => (
              <div key={index} className="border p-2 rounded-3 ">
                <div className="w-100 rounded-2 overflow-hidden  ">
                  <img src={data.image} className="object-cover w-100 " />
                </div>

                <div>
                  <p>{data.category}</p>
                  <div className="d-flex justify-content-between  ">
                    <p className=" font-weight-bold">{data.title}</p>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="drop"
                        variant="light"
                        id="dropdown-basic"
                      >
                        <BsThreeDots />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Action 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                {
                  data?.desc ? (
                    <p>{data.desc}</p>
                  ):(
                    <div className="d-flex gap-5 fw-bold ">
                      <div className="d-flex align-items-center gap-2">
                      <MdDateRange />
                        {data.date}</div>
                      <div  className="d-flex align-items-center gap-2">
                      <CiLocationOn />
                        {data.location}</div>
                    </div>
                  )
                }
                <div className="d-flex justify-content-between align-content-center  align-items-center">
                 <div className=" d-flex gap-2 align-items-center ">
                  <img src={data.User}/>
                  <p className="mt-3">{data.author}</p>
                 </div>
                  <div className="d-flex gap-3    justify-content-center  align-items-center ">
                    <div className="d-flex gap-1 justify-content-center  align-items-center ">
                      <FaRegEye />
                      {data.views}
                      <span>views</span>
                    </div>
                    <Button variant="secondary">
                      <IoMdShare />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" d-md-flex  d-none  flex-column gap-4  align-items-end   position-relative  ">
            <div className="d-flex  gap-5 align-items-center pb-2 border-bottom locationContainer w-75  position-relative ">
              <MdOutlineLocationOn className="item1" />
              <input
                placeholder="Enter your Location"
                value={location}
                onChange={changeHandler}
                className="border-0  relative w-auto px-5"
              />

              <MdOutlineModeEdit className="item2 " />
            </div>
            <div className="d-flex gap-3  w-75  ">
              <MdErrorOutline className=" h2  text-opacity-50 " />
              <p className="text-opacity-25">
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
            {isLoggedIn && (
              <div className="w-75 d-flex flex-column  gap-4">
                <div className=" d-flex align-items-center  align-content-center   gap-3  py-1 ">
                  <FaRegThumbsUp  className="py-0"/>
                  <p className="py-0 text-uppercase  ">REcommended Groups</p>
                </div>
                <div className="d-flex flex-column  gap-4">
                  {
                    groupData.map((data,index)=>{
                      return(
                        <div className=" d-flex justify-content-between ">
                          <div className=" d-flex align-items-center  gap-3"> 
                            <img src={data.image}/>
                            <span>{data.name}</span>
                          </div>
                          <button className=" bg-light rounded   text-dark ">
                            follow
                          </button>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
