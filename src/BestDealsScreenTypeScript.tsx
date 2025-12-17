import React from "react";

interface BestDealScreenProps {
  callbackfunction: () => void;
}

const BestDealsScreenTypeScript: React.FC<BestDealScreenProps> = ({
  callbackfunction,
}) => {
  const handleCheck = () => {
    callbackfunction();
  };

  return (
    <div className="bestDeals-screen">
      <h1>Best Deals</h1>
      <button onClick={() => handleCheck()}>checking callback</button>
    </div>
  );
};

export default BestDealsScreenTypeScript;
