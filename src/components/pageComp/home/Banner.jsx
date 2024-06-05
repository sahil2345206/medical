import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import bg05 from '../../../assets/images/slider/05.jpg';
import bg04 from '../../../assets/images/slider/04.jpg';
import bg03 from '../../../assets/images/slider/03.jpg';
import bg02 from '../../../assets/images/slider/02.jpg';
import bg01 from '../../../assets/images/slider/01.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
	const sliderItems = [
		{ id: 1, img: bg01, title: "Health Care Services", subtitle: "WE CARE ABOUT YOUR", highlight: "HEALTH", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper egestas. Sed non mattis metus. Integer vel lorem tincidunt." },
		{ id: 2, img: bg02, title: "Health Care Services", subtitle: "WE CARE ABOUT YOUR", highlight: "HEALTH", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper egestas. Sed non mattis metus. Integer vel lorem tincidunt." },
		{ id: 3, img: bg03, title: "Health Care Services", subtitle: "WE CARE ABOUT YOUR", highlight: "HEALTH", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper egestas. Sed non mattis metus. Integer vel lorem tincidunt." },
		{ id: 4, img: bg04, title: "Health Care Services", subtitle: "WE CARE ABOUT YOUR", highlight: "HEALTH", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper egestas. Sed non mattis metus. Integer vel lorem tincidunt." }
	];

	const services = [
		{ id: 1, title: "Medicine Pill Schedules", description: "We provide detailed schedules for taking medicine pills, ensuring you never miss a dosage.", buttonLabel: "Explore" , path:'#'},
		{ id: 2, title: "Qualified Doctors", description: "Our team consists of highly qualified doctors ready to provide you with top-notch medical care and advice.", buttonLabel: "Meet Our Doctors" , path:'#'},
		{ id: 3, title: "Appointments", description: "Book appointments with ease and convenience, ensuring you get the care you need at your preferred time.", buttonLabel: "Book Now" , path:'/book-appointment' }
	];

	return (
		<>
			<section className="section hero-area" style={{ backgroundImage: `url(${bg05})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
				<Carousel>
					{sliderItems.map(item => (
						<Carousel.Item key={item.id}>
							<div className="hero-slider-item" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
								<div className="hero-overlay">
									<div className="hero-overlay-wrapper">
										<div className="pos-tb-center hero-overlay-inner">
											<div className="container t-xs-center t-md-left">
												<div className="row row-tb-20">
													<div className="col-md-8">
														<h3 className="mb-10 ">{item.title}</h3>
														<h1 className="t-uppercase mb-20 ">{item.subtitle} <span className="color-theme">{item.highlight}</span></h1>
														<h5 className="mb-30 color-lighter">{item.description}</h5>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			</section>
			<section className="section features-boxes-area hero-features-boxes">
				<div className="container">
					<div className="row row-md-cell color-white">
						{services.map(service => (
							<div key={service.id} className="col-md-4 valign-top">
								<div className="features-boxe-single prl-10 pt-20 pb-15 bg-theme" style={{ minHeight: '235px' }}>
									<h4 className="mb-20 t-uppercase">{service.title}</h4>
									<p className="mb-20">{service.description}</p>
									<Link to={service.path} className="btn btn-o btn-rev" style={{
										position: "absolute", bottom: "10px"
									}}>{service.buttonLabel}</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
