import React from "react";
import CommonHeader from "../../common/CommonHeader";
import MakeAppointment from "../home/MakeAppointment";

const Content = () => {
  return (
    <div>
      <main id="mainContent" className="main-content">
        <CommonHeader title={"Book Appointment"} />
        <MakeAppointment />
      </main>
    </div>
  );
};

export default Content;
