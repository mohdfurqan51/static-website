import React from "react";
import Image from "next/image";
import aboutus from "../images/aboutus.png";

const About = () => {
  return (
    <div className="flex mt-36 ">
      <div className="container flex-1">
        <h1>ABOUT US</h1>
        <p className="text-white italic p-12">
          Aadhyashri Infra Private Limited is incorporated by people of
          different sectors. All our partners and promoters are nature & wild
          life lovers. Having an array of experience in sustainable development,
          we want to make it easy for you to find your perfect holiday home with
          extensive services that caters to all kinds of our customers.
          <br />
          <br />
          We offer plots and high-end vacation homes with all the amenities and
          features. Whether you're looking for a family getaway, a place to
          relax & unwind with family or friends or a romanticvacation, Amgarhi
          Hills is the perfect place to call your second home.
        </p>
      </div>
      <div className="flex-1">
        <Image className="border-solid border-4 mb-12 rounded-lg" src={aboutus} alt="" height={800} />
      </div>

    </div>
  );
};

export default About;
