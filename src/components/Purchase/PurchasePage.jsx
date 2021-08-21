import React from "react";
import PurchaseCard1 from "./Purchase-Cards/PurchaseCard1";
import PurchaseCard2 from "./Purchase-Cards/PurchaseCard2";
import PurchaseCard3 from "./Purchase-Cards/PurchaseCard3";

import "./PurchasePage.css";

const PurchasePage = () => {
  const service1Data = [
    {
      checkIcon: " fas fa-check",
      serviceTitle: "Unlimited Pages",
    },
    {
      checkIcon: " fas fa-check",
      serviceTitle: "Unlimited Forms",
    },
    {
      checkIcon: " fas fa-check",
      serviceTitle: "Unlimited HTTPS",
    },
  ];

  const service2Data = [
    {
      checkIcon: " fas fa-check",
      serviceTitle: "Free Sub-Domain",
    },
    {
      checkIcon: " fas fa-check",
      serviceTitle: "U​nlimited Data",
    },
    {
      checkIcon: " fas fa-check",
      serviceTitle: "24/7 Support",
    },
  ];

  const purchaseData = [
    "Purchase",
    `Start using static.app as a hosting for your websites today to
      get the best features to buck ratio on the market.`,
  ];
  return (
    <>
      <div className="purchase__container">
        <div className="inner__purchase">
          <div className="upper__text-area">
            <h1>{purchaseData[0]}</h1>
            <div className="purchase__provides">
              <p className="static__text">{purchaseData[1]}</p>

              <div className="service-1">
                {service1Data.map((items, index) => {
                  return (
                    <div className="rows" key={index}>
                      <i className={items.checkIcon} />
                      <p>{items.serviceTitle}</p>
                    </div>
                  );
                })}
              </div>

              <div className="service-2">
                {service2Data.map((items, index) => {
                  return (
                    <div className="rows" key={index}>
                      <i className={items.checkIcon} />
                      <p>{items.serviceTitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="card__divs">
          <PurchaseCard1 />
          <PurchaseCard2 />
          <PurchaseCard3 />
        </div>
      </div>
    </>
  );
};

export default PurchasePage;
