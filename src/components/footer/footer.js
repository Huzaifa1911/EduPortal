import React from "react";
import "../../components/footer/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="upperDiv">
        <div className="linksContainer">
          <div className="linksDiv linksDiv1">
            <p>Featured courses</p>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div className="linksDiv linksDiv2">
            <p>Blog</p>
            <p>Help and Support</p>
          </div>
          <div className="linksDiv linksDiv3">
            <p>Terms</p>
            <p>Privacy policy and cookie policy</p>

            <p> </p>
          </div>
        </div>
        <div className="linksDiv linksDiv4"></div>
      </div>
      <div className="lowerDiv">
        <img src="..//logo.png" className="udemyLogo" alt="logo"></img>
        <div className="copyrightDiv">
          <p>© 2022 EduPortal, Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
