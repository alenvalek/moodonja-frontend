import {
	Avatar,
	Button,
	Card,
	CardContent,
	CardHeader,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./PostDetails.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SendIcon from "@mui/icons-material/Send";
import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";

const PostDetails = ({ user }) => {
	const id = useParams().id;
	const navigate = useNavigate();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const [body, setBody] = useState("");
	const [editBody, setEditBody] = useState("");
	const [anchorEl, setAnchorElement] = useState(null);
	const open = Boolean(anchorEl);
	const [modalVisible, setModalVisible] = useState(false);

	const fetchPost = async () => {
		try {
			const res = await axios.get(`/posts/${id}`);
			setPost(res.data);

			setEditBody(res.data.body);
		} catch (error) {
			navigate("/home");
			console.log(error);
		}
		setLoading(false);
	};

	const handleDeleteComment = async (comment_id) => {
		try {
			const res = await axios.delete(`/posts/comment/${id}/${comment_id}`);
			setPost(res.data);
			toast.success("Uspješno izbrisan komentar! 🤩", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (error) {
			console.log(error);
			toast.error("Nešto je puklo.. 😥", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	const removePost = async () => {
		try {
			await axios.delete(`/posts/${id}`);
			toast.success("Uspješno izbrisana objava! 🤩", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			navigate("/home");
		} catch (error) {
			console.log(error);
			toast.error("Nešto je puklo.. 😥", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	const editPost = async () => {
		try {
			const res = await axios.patch(`/posts/${id}`, {
				body: editBody,
			});
			setPost(res.data);
			toast.success("Uspješno uređena objava! 🤩", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (error) {
			console.log(error);
			toast.error("Nešto je puklo.. 😥", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	const createComment = async () => {
		try {
			const res = await axios.patch(`/posts/comment/${id}`, { body });
			setPost(res.data);
			toast.success("Uspješno dodan novi komentar! 🤩", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (error) {
			console.log(error);
			toast.error("Nešto je puklo.. 😥", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		setBody("");
	};

	const handleClick = (e) => {
		setAnchorElement(e.currentTarget);
	};

	const handleClose = (action) => {
		setAnchorElement(null);
		switch (action) {
			case "delete":
				removePost(id);
				break;
			case "edit":
				setModalVisible(true);
				break;
			default:
				break;
		}
	};

	const handleEdit = (e) => {
		setModalVisible(false);
		editPost();
	};

	useEffect(() => {
		if (user) {
			fetchPost();
		}
	}, [user]);

	return (
		<Grid container marginTop={4}>
			{user && post && !loading && (
				<Grid item xs={12}>
					<Card>
						<CardHeader
							style={{ textAlign: "left" }}
							avatar={
								post.author.photoURL ? (
									<Avatar src={post.author.photoURL} />
								) : (
									<Avatar>{post.author.username[0].toUpperCase()}</Avatar>
								)
							}
							action={
								user &&
								user._id === post.author._id && (
									<>
										<IconButton aria-label='settings' onClick={handleClick}>
											<MoreVertIcon />
										</IconButton>
										<Menu
											anchorEl={anchorEl}
											open={open}
											onClose={handleClose}
											MenuListProps={{
												"aria-labelledby": "basic-button",
											}}>
											<MenuItem onClick={(e) => handleClose("edit")}>
												Edit post
											</MenuItem>

											<MenuItem onClick={(e) => handleClose("delete")}>
												Delete post
											</MenuItem>
										</Menu>
									</>
								)
							}
							title={post.author.username}
							subheader={moment(post.createdAt).format(
								"DD.MM.YYYY. h:m"
							)}></CardHeader>
						<CardContent>
							<Typography variant='body1'>{post.body}</Typography>
						</CardContent>
						<hr />
						<CardContent>
							<Grid container alignContent='space-between' alignItems='center'>
								<Grid item xs={2} md={1}>
									{post.author.photoURL ? (
										<Avatar variant='rounded' src={post.author.photoURL} />
									) : (
										<Avatar variant='rounded'>
											{user.username[0].toUpperCase()}
										</Avatar>
									)}
								</Grid>
								<Grid item xs={7} md={9}>
									<TextField
										sx={{ bgcolor: "white" }}
										fullWidth
										multiline
										value={body}
										onChange={(e) => setBody(e.target.value)}
										variant='filled'
										maxRows={2}
										minRows={2}
									/>
								</Grid>
								<Grid item xs={3} md={2}>
									<button className={styles.test} onClick={createComment}>
										<SendIcon />
									</button>
								</Grid>
							</Grid>
						</CardContent>
						<hr />
						{post &&
							post.postComments.length > 0 &&
							post.postComments.map((comment) => (
								<CardContent key={comment._id}>
									<Grid
										marginTop={1}
										marginBottom={1}
										container
										alignItems='center'>
										{comment.user.photoURL ? (
											<Avatar variant='rounded' src={comment.user.photoURL} />
										) : (
											<Avatar variant='rounded'>
												{comment.user.username[0].toUpperCase()}
											</Avatar>
										)}

										<Grid marginLeft={1} item xs={2} md={1}>
											<Typography variant='subtitle1'>
												{comment.user.username}
											</Typography>
										</Grid>
										<Typography variant='caption' color='text.secondary'>
											{moment(comment.createdAt).fromNow()}
										</Typography>
										<Grid item xs={10} md={10} marginTop={1}>
											<Typography variant='body2'>{comment.body}</Typography>
										</Grid>
										{user && user._id === comment.user._id && (
											<Grid item xs={2} md={2} marginTop={1}>
												<IconButton
													color='error'
													onClick={(e) => handleDeleteComment(comment._id)}>
													<DeleteForeverIcon />
												</IconButton>
											</Grid>
										)}
									</Grid>
									<Divider variant='middle' />
								</CardContent>
							))}
					</Card>
					<Dialog open={modalVisible} onClose={(e) => setModalVisible(false)}>
						<DialogTitle>Edit post</DialogTitle>
						<DialogContent>
							<TextField
								sx={{ margin: "1rem" }}
								label='Novi tekst'
								value={editBody}
								onChange={(e) => setEditBody(e.target.value)}
							/>
						</DialogContent>
						<DialogActions>
							<Button
								variant='contained'
								color='primary'
								fullWidth
								onClick={handleEdit}>
								Edit post
							</Button>
						</DialogActions>
					</Dialog>
				</Grid>
			)}
		</Grid>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, {})(PostDetails);
