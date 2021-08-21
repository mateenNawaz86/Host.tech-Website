import React from "react";
import GreenBtn from "../../UI/GreenBtn";
import HostCard from "../Host-Cards/Host-Card-1/HostCard";
import HostCard2 from "../Host-Cards/Host-Card-2/HostCard2";
import HostCard3 from "../Host-Cards/Host-Card-3/HostCard3";
import HostCard4 from "../Host-Cards/Host-Card-4/HostCard4";

import "./HostingCat.css";

const HostingCat = () => {
  const hostData = [
    `Turn your ideas into reality with Static. With a lot of powerful
  features, we guarantee simplicity and clarity.`,
    "Read More",
  ];

  return (
    <>
      <div className="hostCat__container">
        <div className="host__text">
          <h1>
            Hosting
            <br /> solution with
            <br /> benefits.
          </h1>
          <p>{hostData[0]}</p>

          <GreenBtn type="submit">{hostData[1]}</GreenBtn>
        </div>

        <div className="host__Cards">
          <div className="first__col">
            <HostCard />
            <HostCard2 />
          </div>

          <div className="second__col">
            <HostCard3 />
            <HostCard4 />
          </div>
        </div>
      </div>
    </>
  );
};

export default HostingCat;
