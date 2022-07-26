import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Grid,
	Typography,
	IconButton,
	CardActions,
	Divider,
	MenuItem,
	Menu,
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	Button,
	DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const PostCard = ({
	body,
	username,
	postedAt,
	isPostLiked,
	updateLikes,
	id,
	likeCount,
	isUserAuthor,
	removePost,
	editPost,
	photoURL,
}) => {
	const [anchorEl, setAnchorElement] = useState(null);
	const open = Boolean(anchorEl);
	const [modalVisible, setModalVisible] = useState(false);
	const [editBody, setEditBody] = useState(body);
	const navigate = useNavigate();

	const handleClick = (e) => {
		setAnchorElement(e.currentTarget);
	};

	const handleComment = (e) => {
		navigate(`/post/${id}`);
	};

	const handleEdit = (e) => {
		setModalVisible(false);
		editPost({ postID: id, body: editBody });
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

	return (
		<Grid container>
			<Grid item xs={12} marginBottom={4}>
				<Card>
					<CardHeader
						style={{ textAlign: "left" }}
						avatar={
							photoURL ? (
								<Avatar src={photoURL} />
							) : (
								<Avatar>{username[0].toUpperCase()}</Avatar>
							)
						}
						action={
							isUserAuthor && (
								<>
									<IconButton
										ref={anchorEl}
										aria-label='settings'
										onClick={handleClick}>
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
						title={username}
						subheader={moment(postedAt).format("DD.MM.YYYY")}></CardHeader>
					<CardContent align='left'>
						<Typography>{body}</Typography>
					</CardContent>
					<Divider variant='middle' />
					<CardActions>
						<IconButton color='primary' onClick={handleComment}>
							<ForumOutlinedIcon />
						</IconButton>
						<IconButton color='primary' onClick={(e) => updateLikes(id)}>
							{isPostLiked ? (
								<>
									<FavoriteIcon />
									<span>{likeCount}</span>
								</>
							) : (
								<>
									<FavoriteBorderOutlinedIcon /> <span>{likeCount}</span>
								</>
							)}
						</IconButton>
					</CardActions>
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
				</Card>
			</Grid>
		</Grid>
	);
};

export default PostCard;
