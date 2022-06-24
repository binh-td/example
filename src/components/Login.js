import { Form, Input, Button } from "antd";
import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../redux/Login/authSlice";
import { Redirect, useHistory } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const onFinish = (values) => {
      axios.post("http://localhost:5000/api/auth/login", { user_name: values.username, password: values.password })
        .then(res => {
          const { username, accessToken } = res.data;
          dispatch(loginSuccess({ user: username, authToken: accessToken }));
          history.push("/");
        })
    }

    const auth = useSelector(state => state.auth)
    console.log("auth", auth)

    if(auth.user) {
      return <Redirect to="/"/>
    }

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={
          {
            // remember: true,
          }
        }
          onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
