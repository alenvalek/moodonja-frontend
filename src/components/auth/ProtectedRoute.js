import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ children, isAuth, userLoading }) => {
	if (!isAuth && !userLoading) {
		return <Navigate to='/' replace />;
	}
	return children;
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	userLoading: state.auth.loading,
});

export default connect(mapStateToProps, {})(ProtectedRoute);
