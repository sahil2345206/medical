import React from "react";
import CommonHeader from "../../common/CommonHeader";
import AddMedicine from "./AddMedicine";

const Content = () => {
  return (
    <div>
      <main id="mainContent" className="main-content">
        <CommonHeader title={"Schedule Medicine"} />
        <AddMedicine />
      </main>
    </div>
  );
};

export default Content;
