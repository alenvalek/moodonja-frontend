import { Grid, Typography } from "@mui/material";
import { connect } from "react-redux";
import PostCard from "./PostCard";
import axios from "axios";

const PostCardList = ({ user, posts, setPosts }) => {
	const removePost = async (postID) => {
		try {
			await axios.delete(`http://localhost:5000/posts/${postID}`);
			let modified = posts.filter((post) => post._id !== postID);
			setPosts(modified);
		} catch (error) {
			console.log(error);
		}
	};

	const editPost = async ({ postID, body }) => {
		try {
			const res = await axios.patch(`http://localhost:5000/posts/${postID}`, {
				body,
			});
			let modified = posts.map((post) =>
				post._id === postID ? res.data : post
			);
			setPosts(modified);
		} catch (error) {
			console.log(error);
		}
	};

	const updateLikes = async (postID) => {
		try {
			const res = await axios.patch(
				`http://localhost:5000/posts/like/${postID}`
			);
			let modified = posts.map((post) =>
				post._id === postID ? { ...post, postLikes: res.data } : post
			);

			setPosts(modified);
		} catch (error) {
			console.log(error);
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
