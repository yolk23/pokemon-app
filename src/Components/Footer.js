import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const spacing = () => {
    return {
      paddingRight: "10px",
    };
  };
  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <footer style={{ justifyContent: "center", display: "flex" }}>
        <a
          href="https://www.facebook.com/profile.php?id=100093458891383"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size="30" style={spacing()} />
        </a>
        <a
          href="https://github.com/yolk23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="30" style={spacing()} />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
