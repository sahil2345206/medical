import React from "react";
import icon from "../../../assets/images/icon.png"
import img01 from "../../../assets/images/appointment/img-01.png"

const MakeAppointment = () => {
  return (
    <div>
      <section className="section appointment-area pt-60">
        <div className="container">
          <div className="row mb-30">
            <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xs-center t-center mb-40">
              <h2 className="section-title mb-20 font-22 t-uppercase">
                MAKE AN APPOINTMENT
              </h2>
              <div className="heart-line">
                <img src={icon} alt="Awesome Image" />
              </div>
            </div>
          </div>
          <div className="row services">
            <div className="col-lg-6">
              <img src={img01} alt="" />
            </div>
            <div className="col-lg-6 ptb-40">
              <div className="appointment-form">
                <form
                //   action="https://imedical-theme.firebaseapp.com/assets/php/appointment.php"
                  method="post"
                  id="appointmentForm"
                >
                  <div className="row row-tb-10 row-rl-10">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control input-lg"
                        placeholder="First Name"
                        name="required['fname']"
                        id="appointmentFname"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control input-lg"
                        placeholder="Last Name"
                        name="required['lname']"
                        id="appointmentLname"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control input-lg"
                        placeholder="Address Email"
                        name="required['email']"
                        id="appointmentEmail"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control input-lg"
                        placeholder="Phone Number"
                        name="required['phone']"
                        id="appointmentPhone"
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control input-lg"
                        name="required['gender']"
                        id="appointmentGender"
                      >
                        <option value="">Select Your Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Child">Child</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control input-lg field-date"
                        type="date"
                        placeholder="appointment Date"
                        name="required['date']"
                        id="appointmentDate"
                      />
                    </div>
                    <div className="col-xs-12">
                      <textarea
                        className="form-control input-lg"
                        rows="7"
                        placeholder="Message"
                        name="required['message']"
                        id="appointmentMessage"
                      ></textarea>
                    </div>
                    <div className="col-xs-12">
                      <button
                        className="btn btn-lg btn-block"
                        type="submit"
                        id="appointmentSubmit"
                      >
                        Submit
                      </button>
                    </div>
                    {/* <div className="col-xs-12">
                      <div id="appointmentResponse" className="form-response">
                        <span className="color-theme">
                          <i className="fa fa-info-circle"></i> Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit.
                        </span>
                      </div>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
