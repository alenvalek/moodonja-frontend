import { Grid, Typography } from "@mui/material";
import { connect } from "react-redux";
import PostCard from "./PostCard";
import axios from "axios";
import { toast } from "react-toastify";

const PostCardList = ({ user, posts, setPosts }) => {
	const removePost = async (postID) => {
		try {
			await axios.delete(`/posts/${postID}`);
			let modified = posts.filter((post) => post._id !== postID);
			setPosts(modified);
		} catch (error) {
			console.log(error);
		}
	};

	const editPost = async ({ postID, body }) => {
		try {
			const res = await axios.patch(`/posts/${postID}`, {
				body,
			});
			let modified = posts.map((post) =>
				post._id === postID ? res.data : post
			);
			setPosts(modified);
			toast.success("Uspješno promjenjena objava! 🤩", {
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

	const updateLikes = async (postID) => {
		try {
			const res = await axios.patch(`/posts/like/${postID}`);

			let modified = posts.map((post) =>
				post._id === postID ? { ...post, postLikes: res.data } : post
			);

			setPosts(modified);
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

	return (
		<Grid marginTop={4}>
			{posts && posts.length > 0 ? (
				posts.map((post) => (
					<PostCard
						key={post._id}
						id={post._id}
						updateLikes={updateLikes}
						removePost={removePost}
						editPost={editPost}
						body={post.body}
						username={post.author.username}
						postedAt={post.createdAt}
						likeCount={post.postLikes.length}
						isUserAuthor={post.author._id === user._id}
						isPostLiked={post.postLikes.some((like) => like.user === user._id)}
					/>
				))
			) : (
				<Typography variant='h3'>Nema novih postova 😥</Typography>
			)}
		</Grid>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, {})(PostCardList);
