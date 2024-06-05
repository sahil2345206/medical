import React from 'react';
import specialist1 from '../../../assets/images/doctors/01.jpg';
import specialist2 from '../../../assets/images/doctors/02.jpg';
import specialist3 from '../../../assets/images/doctors/03.jpg';
import icon from '../../../assets/images/icon.png';

const specialists = [
  {
    name: 'DR. Isabella Garcia',
    specialization: 'Surgery Specialist',
    image: specialist1,
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#',
    },
  },
  {
    name: 'DR. James White',
    specialization: 'Surgery Specialist',
    image: specialist2,
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#',
    },
  },
  {
    name: 'DR. Daniel Harris',
    specialization: 'Surgery Specialist',
    image: specialist3,
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#',
    },
  },
  {
    name: 'DR. Martin Allen',
    specialization: 'Surgery Specialist',
    image: specialist3,
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#',
    },
  },
];

const OurSpecialist = () => {
  return (
    <div>
      <section className="section team-area pt-80 pb-40 bg-gray">
        <div className="container">
          <div className="row mb-30">
            <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xs-center t-center mb-40">
              <h6 className="section-subtitle mb-10 t-uppercase color-mid">How We Are</h6>
              <h2 className="section-title mb-20 font-22 t-uppercase">Meet Our Specialists</h2>
              <div className="heart-line">
                <img src={icon} alt="Heart Icon" />
              </div>
            </div>
          </div>
          <div className="team-members row">
            {specialists.map((specialist, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="single-member">
                  <div className="single-member-header">
                    <img src={specialist.image} alt={specialist.name} />
                   
                  </div>
                  <div className="single-member-content">
                    <h5 className="mb-10 font-15 t-uppercase">
                      <a href="doctor-details-2.html">{specialist.name}</a>
                    </h5>
                    <h6 className="color-mid font-12 t-uppercase mb-5">{specialist.specialization}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurSpecialist;
