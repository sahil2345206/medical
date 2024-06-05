import React from 'react'
import awesomeImge from "../../../assets/images/icon.png"
import serv01 from "../../../assets/images/services/01.jpg"
import serv02 from "../../../assets/images/services/02.jpg"
import serv03 from "../../../assets/images/services/03.jpg"
import serv04 from "../../../assets/images/services/04.jpg"
import serv05 from "../../../assets/images/services/05.jpg"
import serv06 from "../../../assets/images/services/06.jpg"





const WeOffer = () => {
  return (
    <div>
           <section className="section services-area ptb-60">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xs-center t-center mb-40">
                            <h6 className="section-subtitle mb-10 t-uppercase color-mid">OUR OUTSTANDING SERVICES</h6>
                            <h2 className="section-title mb-20 font-22 t-uppercase">WHAT WE OFFER</h2>
                            <div className="heart-line">
                                <img src={awesomeImge} alt="Awesome Image" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-single">
                                <div className="service-thumb">
                                    <img src={serv01} alt="" />
                                </div>
                                <div className="service-content">
                                    <h5 className="mb-10 t-uppercase color-theme">Dental Implants</h5>
                                    <p className="color-mid mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto officiis nesciunt incidunt eligendi iusto eius molestias atque.</p>
                                    <a className="btn btn-o btn-sm btn-rounded" href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-single">
                                <div className="service-thumb">
                                    <img src={serv02} alt="" />
                                </div>
                                <div className="service-content">
                                    <h5 className="mb-10 t-uppercase color-theme">Whitening</h5>
                                    <p className="color-mid mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto officiis nesciunt incidunt eligendi iusto eius molestias atque.</p>
                                    <a className="btn btn-o btn-sm btn-rounded" href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-single">
                                <div className="service-thumb">
                                    <img src={serv03} alt="" />
                                </div>
                                <div className="service-content">
                                    <h5 className="mb-10 t-uppercase color-theme">Vaccinations</h5>
                                    <p className="color-mid mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto officiis nesciunt incidunt eligendi iusto eius molestias atque.</p>
                                    <a className="btn btn-o btn-sm btn-rounded" href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-single">
                                <div className="service-thumb">
                                    <img src={serv04} alt="" />
                                </div>
                                <div className="service-content">
                                    <h5 className="mb-10 t-uppercase color-theme">Laboratory</h5>
                                    <p className="color-mid mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto officiis nesciunt incidunt eligendi iusto eius molestias atque.</p>
                                    <a className="btn btn-o btn-sm btn-rounded" href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-single">
                                <div className="service-thumb">
                                    <img src={serv05} alt="" />
                                </div>
                                <div className="service-content">
                                    <h5 className="mb-10 t-uppercase color-theme">Medical dressage</h5>
                                    <p className="color-mid mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto officiis nesciunt incidunt eligendi iusto eius molestias atque.</p>
                                    <a className="btn btn-o btn-sm btn-rounded" href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-single">
                                <div className="service-thumb">
                                    <img src={serv06} alt="" />
                                </div>
                                <div className="service-content">
                                    <h5 className="mb-10 t-uppercase color-theme">Emergency Contraception</h5>
                                    <p className="color-mid mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto officiis nesciunt incidunt eligendi iusto eius molestias atque.</p>
                                    <a className="btn btn-o btn-sm btn-rounded" href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default WeOffer