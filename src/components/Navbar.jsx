import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart" style={{ position: "relative" }}>
          Cart{" "}
          {items.length === 0 ? <></>: (
            <span
              style={{
                position: "absolute",
                top: "-3px",
                fontWeight: "bolder",
              }}
            >
              {items.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
