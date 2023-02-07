import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../Components/Loader/Loading";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Submitting the login form function
  const submitLoginForm = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      message.success("Login Successfully");
      localStorage.setItem(
        "users",
        JSON.stringify({ ...data.user, password: "-" })
      );
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Try To Use Valid Credentials");
    }
  };

  // Preventing the login user
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
          onFinish={submitLoginForm}
        >
          <h2 className="r-heading">Login Form</h2>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register" style={{ textDecoration: "none" }}>
              Not a user ? Click Here To Register
            </Link>
            <button className="btn btn-primary" style={{ width: "8vw" }}>
              Login
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
