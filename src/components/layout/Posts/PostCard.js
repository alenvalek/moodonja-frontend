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
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
const PostCard = ({ body }) => {
	return (
		<Grid container>
			<Grid item xs={12} marginBottom={4}>
				<Card>
					<CardHeader
						style={{ textAlign: "left" }}
						avatar={<Avatar>JD</Avatar>}
						action={
							<IconButton aria-label='settings'>
								<MoreVertIcon />
							</IconButton>
						}
						title='John Doe'
						subheader='September 8, 2021'></CardHeader>
					<CardContent align='left'>
						<Typography>{body}</Typography>
					</CardContent>
					<Divider variant='middle' />
					<CardActions>
						<IconButton color='primary'>
							<ForumOutlinedIcon />
						</IconButton>
						<IconButton color='primary'>
							<FavoriteBorderOutlinedIcon />
						</IconButton>
						<IconButton color='primary'>
							<ShareOutlinedIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
};

export default PostCard;
