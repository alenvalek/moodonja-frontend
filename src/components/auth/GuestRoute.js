import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children, isAuth, userLoading }) => {
	if (isAuth && !userLoading) {
		return <Navigate to='/home' replace />;
	}
	return children;
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	userLoading: state.auth.loading,
});

export default connect(mapStateToProps, {})(GuestRoute);
