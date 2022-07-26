import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, Paper, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styles from "./Dashboard.module.css";
import { connect } from "react-redux";
import { loadUser } from "../../../actions/auth";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = ({ user, loading }) => {
	const [newImage, setNewImage] = useState("");
	const [imageFile, setImageFile] = useState(null);
	const [isSettingNewImage, setIsSettingNewImage] = useState(false);
	const [editableUsername, setEditableUsername] = useState("");
	const [editableBio, setEditableBio] = useState("");
	const handleUpload = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setNewImage(reader.result);
			}
		};
		reader.readAsDataURL(e.target.files[0]);
		setIsSettingNewImage(true);
		setImageFile(e.target.files[0]);
	};

	const handleSubmit = async () => {
		try {
			const formData = new FormData();
			formData.append("file", imageFile);
			formData.append("upload_preset", "moodonja_preset");

			const imgData = await fetch(
				"https://api.cloudinary.com/v1_1/moodonja/image/upload",
				{
					method: "POST",
					body: formData,
				}
			).then((r) => r.json());

			let newUserData = {
				bio: editableBio,
				username: editableUsername,
			};
			if (imgData) newUserData.photoURL = imgData.secure_url;
			await axios.patch("/users", newUserData);
			toast.success("Successfully updated your profile! 🤩", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setIsSettingNewImage(false);
			setNewImage("");
		} catch (error) {
			toast.error("Something went wrong.. 😥", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setIsSettingNewImage(false);
			setNewImage("");
		}
		loadUser();
	};

	useEffect(() => {
		if (user) {
			setEditableUsername(user.username);
			setEditableBio(user.bio || "");
			setImageFile(user.photoUrl || null);
		}
	}, [user]);

	return (
		<Paper sx={{ width: "100%" }}>
			<Grid
				container
				marginTop={4}
				gap={3}
				justifyContent='center'
				alignItems='center'
				textAlign='center'>
				<Grid item xs={12} md={12} sx={{ marginTop: "1rem" }}>
					{isSettingNewImage && newImage && (
						<img className={styles.image} alt='profile' src={newImage} />
					)}
					{!isSettingNewImage && !newImage && (
						<img
							className={styles.image}
							alt='profile'
							src={
								user && user.photoURL
									? user.photoURL
									: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
							}
						/>
					)}
				</Grid>
				<Grid item xs={12} md={12}>
					<Typography variant='h3'>
						<strong>Osnovne informacije</strong>
					</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					md={12}
					alignItems='center'
					textAlign='left'
					display='flex'
					sx={{ marginLeft: ".5rem" }}>
					<Typography variant='h5' sx={{ marginRight: "1rem" }}>
						<strong>Korisničko ime:</strong>{" "}
					</Typography>
					<TextField
						variant='standard'
						value={editableUsername}
						onChange={(e) => setEditableUsername(e.target.value)}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md='12'
					textAlign='left'
					sx={{
						marginLeft: ".5rem",
						marginRight: ".5rem",
						marginBottom: ".5rem",
					}}>
					<Typography variant='h5'>
						<strong>Email:</strong> {(user && !loading && user.email) || ""}
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={12}
					alignItems='center'
					textAlign='left'
					display='flex'
					sx={{ marginLeft: ".5rem" }}>
					<Typography
						variant='h5'
						sx={{ marginRight: "1rem", marginBottom: "4.5rem" }}>
						<strong>Bio:</strong>{" "}
					</Typography>
					<TextField
						variant='outlined'
						multiline
						sx={{ width: "70%" }}
						rows={3}
						value={editableBio}
						onChange={(e) => setEditableBio(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12} md={12} textAlign='left'>
					<Typography
						variant='h5'
						sx={{ marginBottom: "1rem", marginLeft: ".5rem" }}>
						<strong>Postavi novu sliku profila:</strong>
					</Typography>
					<label htmlFor='file' className={styles.customInput}>
						<CloudUploadIcon fontSize='large' sx={{ marginRight: "1rem" }} />{" "}
						<strong> Prenesi novu sliku </strong>
					</label>
					<input
						id='file'
						type='file'
						accept='image/*'
						style={{ display: "none" }}
						onChange={handleUpload}
					/>
				</Grid>
				<Grid item xs={12} md={12} sx={{ marginBottom: ".5rem" }}>
					<Button onClick={handleSubmit} variant='outlined' color='warning'>
						Spremi promjene
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
	loading: state.auth.loading,
});

export default connect(mapStateToProps, { loadUser })(Dashboard);
