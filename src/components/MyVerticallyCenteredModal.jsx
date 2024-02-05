import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import formImage from "../assets/formImage.png";
import "../App.css";
import "../index.css";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { setIsLoggedIn } from "../slices/LogInSlice";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
const MyVerticallyCenteredModal = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(setIsLoggedIn(true));
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          closeButton
          className="d-md-flex d-none  gap-4  fs-6 text-success bgShade"
        >
          <p>
            {" "}
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <RxCross2 className=" fs-4 " onClick={props.onHide} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex gap-5">
        <div className=" d-flex  flex-lg-row flex-column-reverse  justify-content-between gap-3   w-100">
          {/* <form action=""></form> */}
          <div
            className={`d-flex flex-column gap-2  ${
              props.formType == "LogIn" ? "form " : ""
            } `}
          >
            <div className="d-flex justify-content-between  align-items-center  ">
              <p className=" fw-bold   fs-2 ">
                {props.formType == "LogIn" ? "Sign In" : "Create Account"}
              </p>
              <RxCross2 className="d-md-none d-block" onClick={props.onHide} />
            </div>
            <form
              className=" d-flex flex-column w-100"
              onSubmit={submitHandler}
            >
              {props.formType != "LogIn" && (
                <div className="d-flex w-100 ">
                  <input
                    placeholder="First Name"
                    type="text"
                    required="true"
                    className="py-2 w-50 "
                  />
                  <input
                    placeholder="Last Name"
                    type="text"
                    required="true"
                    className="py-2 w-50"
                  />
                </div>
              )}
              <input
                placeholder="Email"
                type="email"
                required="true"
                className="p-2 w-100"
              />
              <div className="position-relative">
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  required="true"
                  className="p-2 w-100 "
                ></input>
                {!showPassword ? (
                  <LuEye
                    onClick={() => setShowPassword(!showPassword)}
                    className=" eye"
                  />
                ) : (
                  <LuEyeOff
                    onClick={() => setShowPassword(!showPassword)}
                    className="eye"
                  />
                )}
              </div>
              {props.formType != "LogIn" && (
                <input
                  placeholder="Confirm Password"
                  required="true"
                  type="password"
                  className="py-2 px-2"
                />
              )}
              <div className="d-flex flex-md-column justify-content-between align-content-center">
  <button
    type="submit"
    className="bg-primary rounded-5 text-center text-light my-2 fs-6"
  >
    {props.formType === "LogIn" ? "Sign In" : "Create Account"}
  </button>
  <p className="text-decoration-underline d-md-none mt-2 ">
    {props.formType === "LogIn" ? "or, Create Account" : "or, Sign In"}
  </p>
</div>

            </form>
            <button className="d-flex rounded-5 justify-content-center  align-items-center ">
              <div
                onClick={submitHandler}
                className="d-flex gap-1 justify-content-center align-items-center "
              >
                <FaFacebook />
                Sign up with Facebook
              </div>
            </button>
            <button
              onClick={submitHandler}
              className="d-flex rounded-5  justify-content-center  align-items-center "
            >
              <div className="d-flex gap-3 justify-content-center  align-items-center  align-content-center ">
                <IoLogoGoogle />
                Sign up with Google
              </div>
            </button>

            {props.formType == "LogIn" ? (
              <p className="text-center">Forgot Password?</p>
            ) : (
              <div className="d-md-none d-block fs-6">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </div>
            )}
          </div>
          {/* image */}
          <div className="  d-md-flex d-none  flex-column  justify-content-end ">
            <div className="d-flex gap-1 justify-content-end ">
              <p>
                {props.formType == "LogIn"
                  ? "Don’t have an account yet?"
                  : "Already have an account"}
              </p>
              <span className="text-primary">
                {props.formType == "LogIn" ? "Create new for free!" : "Sign In"}
              </span>
            </div>
            <div>
              <img src={formImage} />
            </div>
            <div>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
