import { Grid } from "@mui/material";
import PostCard from "./PostCard";

const PostCardList = () => {
	const tempPosts = [
		{
			id: 1,
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, tellus nec sodales luctus, neque velit iaculis magna, at suscipit diam diam convallis nisl. In sit amet dolor felis. ",
			postImg: "test",
			postLocation: "Varazdin, Croatia",
			postTags: [{ friendID: "fdsafnga" }],
		},
		{
			id: 2,
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, tellus nec sodales luctus, neque velit iaculis magna, at suscipit diam diam convallis nisl. In sit amet dolor felis. ",
			postImg: "test",
			postLocation: "Varazdin, Croatia",
			postTags: [],
		},
		{
			id: 3,
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, tellus nec sodales luctus, neque velit iaculis magna, at suscipit diam diam convallis nisl. In sit amet dolor felis. ",
			postImg: "test",
			postLocation: "Zagreb, Croatia",
			postTags: [],
		},
	];

	return (
		<Grid marginTop={4}>
			{tempPosts.map((post) => (
				<PostCard key={post.id} body={post.body} />
			))}
		</Grid>
	);
};

export default PostCardList;
