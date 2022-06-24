import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/Login/authSlice";

export default function Header() {

  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Button onClick={() => dispatch(logout())}>Logout</Button>
        </li>
      </ul>
    </div>
  );
}
