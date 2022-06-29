import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/system";

const GuestRoute = ({ children, isAuth, userLoading, isLanding = false }) => {
	if (isAuth && !userLoading) {
		return <Navigate to='/home' replace />;
	}
	return !isLanding ? <Container>{children}</Container> : children;
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	userLoading: state.auth.loading,
});

export default connect(mapStateToProps, {})(GuestRoute);
