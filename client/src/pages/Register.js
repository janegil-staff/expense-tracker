import React from "react";
import { Form } from "antd";
import Input from "antd/lib/input/Input";
import { Link } from "react-router-dom";
import "../resources/authentication.css";

const Register = () => {
    const onFinish = (values) => {
       console.log(values); 
    }
  return (
    <div className="register">
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <div className="lottie">
            <dotlottie-player
              src="https://lottie.host/25f4f371-d288-4547-9678-9b87eb52fb17/ARuyyGnqUH.lottie"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
        <div className="col-md-5">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Expense Tracker / REGISTER</h1>
            <hr />
            <Form.Item label="name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="password" name="password">
              <Input />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered, Click Here To Login</Link>
              <button className="primary" type="submit" >REGISTER</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
