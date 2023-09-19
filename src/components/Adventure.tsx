import React from "react";
import adv1 from "../images/adv1.png";
import adv2 from "../images/adv2.png";
import adv3 from "../images/adv3.png";
import serinity from "../images/serinity.png";
import Image from "next/image";

const Adventure = () => {
  return (
    <div>
      <div className="flex mt-24">
        <div className="container mx-auto text-justify">
          <p className="text-white m-20 mt-32 align-middle leading-8 text-2xl">
            Fun Activities can be performed in short distances like
            <span className="font-bold">
              &nbsp; water rafting, hot air balloon, paragliding, jungle safari,
              fun/adventure park etc with world class dining options available
              around.
            </span>
            <br />
            You can also enjoy the riverbank of Kosi & Ram Ganga and visit
            Garjiya Devi Temple & Hanuman Dham for soul purification.
          </p>
        </div>
        <div className="container mx-auto grid grid-rows-1 grid-flow-col mt-12">
          <Image
            className="border-solid border-4 rounded-lg"
            src={adv1}
            alt=""
            height={400}
          ></Image>
          <Image
            className="border-solid border-4 rounded-lg"
            src={adv2}
            alt=""
            height={400}
          ></Image>
          <Image
            className="border-solid border-4 rounded-lg"
            src={adv3}
            alt=""
            height={400}
          ></Image>
        </div>
      </div>

      <div className="flex">
        <div className="container mx-auto mt-12">
          <Image
            className="border-solid border-4 rounded-lg m-20"
            src={serinity}
            alt=""
            height={400}
          ></Image>
        </div>
        <div className="container m-20 mx-auto text-justify mt-32">
          <h2 className="text-white m-20 text-4xl">SOUNDS OF SERENITY!</h2>
          <p className="text-white m-20 align-middle -mt-12 text-2xl">
            Team up with life, find peace of mindand live a more fulfilling
            life. Stop waiting for things to happen, and start making them
            happen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
