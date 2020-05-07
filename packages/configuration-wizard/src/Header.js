/* External dependencies */
import React from "react";
import PropTypes from "prop-types";

/* Yoast dependencies */
import { Icon } from "@yoast/components";

/**
 * Onboarding wizard header.
 *
 * @param {Object} props The properties.
 *
 * @returns {ReactElement} The rendered header.
 */
const Header = ( props ) => {
	return (
		<div
			role="banner"
			className="yoast-wizard--header"
		>
			{ ( props.icon ) ? <Icon icon={ props.icon } width="56px" height="56px" /> : null }
			{ ( props.headerTitle ) ? <h1 className="yoast-h1">{ props.headerTitle }</h1> : null }
		</div>
	);
};

Header.propTypes = {
	icon: PropTypes.func,
	headerTitle: PropTypes.string,
};

Header.defaultProps = {
	icon: "",
	headerTitle: "",
};

export default Header;
