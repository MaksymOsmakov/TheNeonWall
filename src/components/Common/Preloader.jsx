import React from 'react';
import preloader from "../../assets/svg/Lazy-Loader.svg";
const Preloader = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<img src={preloader} alt="preloader" />
		</div>
	);
};

export default Preloader;