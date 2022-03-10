import React from "react";
import classNames from "classnames";

const FooterSocial = ({ className, ...props }) => {
  const classes = classNames("footer-social", className);

  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://facebook.com/">
            <i class="fa-brands fa-facebook-f" style={{ color: "#6FB98F" }}></i>
            <title>Facebook</title>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" style={{ color: "#6FB98F" }}>
            <i class="fa-brands fa-twitter"></i>
            <title>Twitter</title>
          </a>
        </li>
        <li>
          <a href="https://google.com/" style={{ color: "#6FB98F" }}>
            <i class="fa-brands fa-instagram"></i>
            <title>Instagram</title>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
