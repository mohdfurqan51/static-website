import React from "react";

const Contact = () => {
  return (
    <div className="mt-40">
      <h1 className=" mb-8 header-text">CONTACT US</h1>
      <div className="text-white text-4xl pl-12">
        <ul>
          <li className="contact-list-item mb-10">
            <p>
              <i className="fa-solid fa-map"></i>&nbsp;&nbsp;227 - Regal Complex, Inner Circle, CP Delhi, 110026
            </p>
          </li>
          <li className="contact-list-item mb-10">
            <a href="mailto:aadhyashri@gmail.com">
            <p>
              <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;
              aadhyashri@gmail.com
            </p>
            </a>
          </li>
          <li className="contact-list-item mb-10">
            <p>
              <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;+91-9999 400 583
            </p>
          </li>
          <li className="contact-list-item mb-44 contact-list-item-last"><a href="www.aadhyashrinfra.in">
            <p>
            <i className="fa-solid fa-globe"></i>&nbsp;&nbsp;www.aadhyashrinfra.in
            </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
