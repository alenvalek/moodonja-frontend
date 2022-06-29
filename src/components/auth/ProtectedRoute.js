import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "@mui/material";

const ProtectedRoute = ({ children, isAuth, userLoading }) => {
	if (!isAuth && !userLoading) {
		return <Navigate to='/' replace />;
	}
	return <Container>{children}</Container>;
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	userLoading: state.auth.loading,
});

export default connect(mapStateToProps, {})(ProtectedRoute);
