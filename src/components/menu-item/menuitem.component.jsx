import React from 'react';
import './menuitem.style.scss';

const MenuItem = ({ title, imgurl, size }) => {
	return (
		<div className={`menu-item ${size}`}>
			<div className="background-image" style={{ backgroundImage: `url(${imgurl})` }}></div>
			<div className="content">
				<h2 className="title">{title.toUpperCase()}</h2>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
