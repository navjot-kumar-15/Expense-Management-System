import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Components/Loader/Loading";
import axios from "axios";
import "./Register.css";

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // On Registering the form function
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      message.success("Registeration Successfully");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Try to use valid credentials");
    }
  };

  // Prevent the login user
  useEffect(() => {
    if (localStorage.getItem("users")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      {loading && <Loading />}
      <div className="register-page">
        <Form
          layout="vertical"
          className="form-register"
          onFinish={submitHandler}
        >
          <h2 className="r-heading">Register Form</h2>
          <Form.Item label="Name" name="name">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Register ? Click Here To Login</Link>
            <button className="btn btn-primary">Register Here</button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default RegisterPage;
