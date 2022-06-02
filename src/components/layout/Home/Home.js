import { Button, Grid } from "@mui/material";
import React from "react";
import "./Home.module.css";

const Home = () => {
	return (
		<Grid
			minHeight='100vh'
			container
			display='flex'
			justifyContent='center'
			alignItems='center'
			spacing={5}>
			<Grid item>
				<Button variant='contained' color='primary'>
					Nudi pomoć
				</Button>
			</Grid>
			<Grid item>
				<Button variant='contained' color='primary'>
					Traži pomoć
				</Button>
			</Grid>
		</Grid>
	);
};

export default Home;
