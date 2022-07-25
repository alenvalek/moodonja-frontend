import {
	Grid,
	TextField,
	Card,
	CardHeader,
	CardContent,
	Typography,
	CardActions,
	IconButton,
	Divider,
	Button,
	CircularProgress,
} from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PostCardList from "../Posts/PostCardList";
import { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

const Home = ({ user }) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchPosts = async () => {
		try {
			const res = await axios.get("http://localhost:5000/posts");
			setPosts(res.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const createPost = async () => {
		let newPost = {};
		if (isLocation) newPost.postLocation = location;
		newPost.body = body;
		try {
			const res = await axios.post("http://localhost:5000/posts", newPost);
			setPosts([res.data, ...posts]);
		} catch (error) {
			console.log(error);
		}
	};

	const [body, setBody] = useState("");
	const [location, setLocation] = useState("");
	const [isLocation, setIsLocation] = useState(false);

	useEffect(() => {
		if (user) {
			fetchPosts();
		}
	}, [user]);

	return (
		<Grid container marginTop={4}>
			<Grid item xs={12}>
				<Card elevation={3}>
					<CardHeader
						sx={{
							textAlign: "center",
							backgroundColor: "rgba(99, 164, 255, 1);",
							color: "white",
						}}
						title='Objavi novi status'
					/>
					<CardContent sx={{ marginTop: 1 }}>
						<TextField
							fullWidth
							multiline
							minRows={3}
							value={body}
							onChange={(e) => setBody(e.target.value)}
							placeholder='Što ti je na umu?'
						/>
						{isLocation && (
							<TextField
								sx={{ marginTop: "1rem" }}
								label='Lokacija'
								value={location}
								onChange={(e) => setLocation(e.target.value)}></TextField>
						)}
					</CardContent>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							flexWrap: "wrap",
							marginLeft: "1rem",
						}}>
						<PeopleOutlineOutlinedIcon
							fontSize='large'
							color='text.secondary'
						/>
						<Typography color='text.secondary' alignContent='center' margin={1}>
							Samo tvoji prijatelji mogu vidjeti ovaj post
						</Typography>
					</div>
					<Divider variant='middle' />
					<CardActions sx={{ justifyContent: "space-between" }}>
						<IconButton
							color='primary'
							onClick={(e) => setIsLocation(!isLocation)}>
							<AddLocationAltOutlinedIcon />
						</IconButton>
						<Button
							sx={{
								paddingLeft: "2rem",
								paddingRight: "2rem",
								backgroundColor: "rgba(99, 164, 255, 1)",
							}}
							variant='contained'
							onClick={createPost}>
							Post it
						</Button>
					</CardActions>
				</Card>
			</Grid>
			<Grid item xs={12} marginTop={4} align='center'>
				{posts && !loading && (
					<PostCardList posts={posts} setPosts={setPosts} />
				)}
				{loading && <CircularProgress size='300px' />}
			</Grid>
		</Grid>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps)(Home);
