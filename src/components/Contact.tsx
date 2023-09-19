import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-40">
      <h1 className=" mb-8">CONTACT US</h1>
      <div className="text-white text-4xl pl-12">
        <ul>
          <li>
            <p>
              <i className="fa-solid fa-map mb-10"></i>&nbsp;&nbsp;227 - Regal Complex, Inner Circle, CP Delhi, 110026
            </p>
          </li>
          <li>
            <a href="mailto:aadhyashri@gmail.com">
            <p>
              <i className="fa fa-envelope mb-10" aria-hidden="true"></i>&nbsp;&nbsp;
              aadhyashri@gmail.com
            </p>
            </a>
          </li>
          <li>
            <p>
              <i className="fa fa-phone mb-10" aria-hidden="true"></i>&nbsp;&nbsp;+91-9999 400 583
            </p>
          </li>
          <li><a href="www.aadhyashrinfra.in">
            <p>
            <i className="fa-solid fa-globe mb-44"></i>&nbsp;&nbsp;www.aadhyashrinfra.in
            </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
