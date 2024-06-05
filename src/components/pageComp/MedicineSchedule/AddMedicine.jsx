import React, { useState } from "react";
import { useFormik, FieldArray, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import icon from "../../../assets/images/icon.png";
import img01 from "../../../assets/images/appointment/img-01.png";

const validationSchema = Yup.object().shape({
  medicineName: Yup.string().required("Medicine Name is required"),
  timesPerDay: Yup.number()
    .min(1, "At least 1 time per day")
    .max(5, "No more than 5 times per day")
    .required("Times Per Day is required"),
  amountPerDose: Yup.string().required("Amount Per Dose is required"),
  startDate: Yup.date().required("Start Date is required"),
  endDate: Yup.date().required("End Date is required"),
  scheduleTimes: Yup.array()
    .of(Yup.string().required("Time is required"))
    .min(1, "At least 1 time is required")
    .max(5, "No more than 5 times are allowed"),
  notes: Yup.string(),
});

const AddMedicine = () => {
  const [showSchedule, setShowSchedule] = useState(false);

  const formik = useFormik({
    initialValues: {
      medicineName: "",
      dosage: "",
      timesPerDay: 1,
      amountPerDose: "",
      startDate: "",
      endDate: "",
      scheduleTimes: [""],
      notes: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
      // Handle form submission logic (e.g., send data to a server)
    },
  });

  const getInputClass = (field) => {
    if (formik.touched[field] && formik.errors[field]) {
      return "form-control input-lg error";
    } else if (formik.touched[field]) {
      return "form-control input-lg success";
    } else {
      return "form-control input-lg";
    }
  };

  return (
    <div>
      <section className="section appointment-area pt-60">
        <div className="container">
          <div className="col-3 ms-auto mb-40">
            <button className="btn btn-lg btn-block " onClick={() => setShowSchedule(!showSchedule)}>Schedule Now
            {showSchedule ? <i class="ms-2 fa-solid fa-angle-up fa-5xs" style={{color: '#ffffff'}}></i> : <i class="ms-2 fa-solid fa-angle-down fa-5xs" style={{color: '#ffffff'}}></i>}
            </button>
          </div>
          {showSchedule && (
            <>
              <div className="row mb-30">
                <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xs-center t-center mb-40">
                  <h2 className="section-title mb-20 font-22 t-uppercase">
                    Schedule Your Medicine
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
                    <FormikProvider value={formik}>
                      <Form id="appointmentForm" onSubmit={formik.handleSubmit}>
                        <div className="row row-tb-10 row-rl-10">
                          <div className="col-md-6">
                            <label htmlFor="medicineName">Medicine Name</label>
                            <input
                              id="medicineName"
                              name="medicineName"
                              className={getInputClass("medicineName")}
                              placeholder="Medicine Name"
                              value={formik.values.medicineName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              required
                            />
                            {formik.touched.medicineName &&
                            formik.errors.medicineName ? (
                              <div className="error-message">
                                {formik.errors.medicineName}
                              </div>
                            ) : null}
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="timesPerDay">Times Per Day</label>
                            <input
                              type="number"
                              id="timesPerDay"
                              name="timesPerDay"
                              className={getInputClass("timesPerDay")}
                              placeholder="Times Per Day"
                              value={formik.values.timesPerDay}
                              onChange={(e) => {
                                formik.handleChange(e);
                                const times = Number(e.target.value);
                                if (times > 0 && times <= 5) {
                                  formik.setFieldValue(
                                    "scheduleTimes",
                                    Array(times).fill("")
                                  );
                                }
                              }}
                              onBlur={formik.handleBlur}
                              required
                            />
                            {formik.touched.timesPerDay &&
                            formik.errors.timesPerDay ? (
                              <div className="error-message">
                                {formik.errors.timesPerDay}
                              </div>
                            ) : null}
                          </div>
                          <FieldArray name="scheduleTimes">
                            {({ push, remove }) => (
                              <>
                                {formik.values.scheduleTimes.map((_, index) => (
                                  <div key={index} className="col-md-6">
                                    <label htmlFor={`scheduleTimes.${index}`}>
                                      Time {index + 1}
                                    </label>
                                    <input
                                      type="time"
                                      name={`scheduleTimes.${index}`}
                                      className={getInputClass(
                                        `scheduleTimes.${index}`
                                      )}
                                      placeholder={`Time ${index + 1}`}
                                      value={formik.values.scheduleTimes[index]}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      required
                                    />
                                    {formik.touched.scheduleTimes?.[index] &&
                                    formik.errors.scheduleTimes?.[index] ? (
                                      <div className="error-message">
                                        {formik.errors.scheduleTimes[index]}
                                      </div>
                                    ) : null}
                                  </div>
                                ))}
                              </>
                            )}
                          </FieldArray>
                          <div className="col-md-6">
                            <label htmlFor="amountPerDose">
                              Amount Per Dose
                            </label>
                            <input
                              type="text"
                              id="amountPerDose"
                              name="amountPerDose"
                              className={getInputClass("amountPerDose")}
                              placeholder="Amount Per Dose"
                              value={formik.values.amountPerDose}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              required
                            />
                            {formik.touched.amountPerDose &&
                            formik.errors.amountPerDose ? (
                              <div className="error-message">
                                {formik.errors.amountPerDose}
                              </div>
                            ) : null}
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="startDate">Start Date</label>
                            <input
                              type="date"
                              id="startDate"
                              name="startDate"
                              className={getInputClass("startDate")}
                              placeholder="Start Date"
                              value={formik.values.startDate}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              required
                            />
                            {formik.touched.startDate &&
                            formik.errors.startDate ? (
                              <div className="error-message">
                                {formik.errors.startDate}
                              </div>
                            ) : null}
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="endDate">End Date</label>
                            <input
                              type="date"
                              id="endDate"
                              name="endDate"
                              className={getInputClass("endDate")}
                              placeholder="End Date"
                              value={formik.values.endDate}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              required
                            />
                            {formik.touched.endDate && formik.errors.endDate ? (
                              <div className="error-message">
                                {formik.errors.endDate}
                              </div>
                            ) : null}
                          </div>
                          <div className="col-xs-12">
                            <label htmlFor="notes">Notes</label>
                            <textarea
                              id="notes"
                              name="notes"
                              className={getInputClass("notes")}
                              rows="7"
                              placeholder="Notes"
                              value={formik.values.notes}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            ></textarea>
                            {formik.touched.notes && formik.errors.notes ? (
                              <div className="error-message">
                                {formik.errors.notes}
                              </div>
                            ) : null}
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
                        </div>
                      </Form>
                    </FormikProvider>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default AddMedicine;
