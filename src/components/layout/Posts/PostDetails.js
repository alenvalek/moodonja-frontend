import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const PostDetails = () => {
	const id = useParams().id;

	return (
		<Grid container marginTop={4}>
			<Grid item xs={12}>
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
					<CardContent>
						<Typography variant='body1'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							luctus nisi eget rutrum condimentum. Aliquam varius ipsum sit amet
							elementum dictum. Etiam sit amet iaculis leo.
						</Typography>
					</CardContent>
					<CardContent
						sx={{
							bgcolor: "rgba(99, 164, 255, .5)",
						}}>
						<Grid container alignContent='center' alignItems='center'>
							<Grid item xs={2} md={1}>
								<Avatar variant='rounded'>JD</Avatar>
							</Grid>
							<Grid item xs={10} md={11}>
								<TextField
									sx={{ bgcolor: "white", borderRadius: 1 }}
									fullWidth
								/>
							</Grid>
						</Grid>
					</CardContent>
					<CardContent>
						<Grid marginTop={1} marginBottom={1} container alignItems='center'>
							<Avatar variant='rounded'>JD</Avatar>
							<Grid marginLeft={1} item xs={2} md={1}>
								<Typography variant='subtitle1'>Jane Doe</Typography>
							</Grid>
							<Typography variant='caption' color='text.secondary'>
								8h ago
							</Typography>
							<Grid item xs={12} md={12} marginTop={1}>
								<Typography variant='body2'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</Typography>
							</Grid>
							<IconButton>
								<FavoriteBorderOutlinedIcon />
							</IconButton>
						</Grid>
						<Divider variant='middle' />
						<Grid marginTop={1} marginBottom={1} container alignItems='center'>
							<Avatar variant='rounded'>JD</Avatar>
							<Grid marginLeft={1} item xs={2} md={1}>
								<Typography variant='subtitle1'>Jane Doe</Typography>
							</Grid>
							<Typography variant='caption' color='text.secondary'>
								8h ago
							</Typography>
							<Grid item xs={12} md={12} marginTop={1}>
								<Typography variant='body2'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</Typography>
							</Grid>
							<IconButton>
								<FavoriteBorderOutlinedIcon />
							</IconButton>
						</Grid>
						<Divider variant='middle' />
						<Grid marginTop={1} marginBottom={1} container alignItems='center'>
							<Avatar variant='rounded'>JD</Avatar>
							<Grid marginLeft={1} item xs={2} md={1}>
								<Typography variant='subtitle1'>Jane Doe</Typography>
							</Grid>
							<Typography variant='caption' color='text.secondary'>
								8h ago
							</Typography>
							<Grid item xs={12} md={12} marginTop={1}>
								<Typography variant='body2'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</Typography>
							</Grid>
							<IconButton>
								<FavoriteBorderOutlinedIcon />
							</IconButton>
						</Grid>
						<Divider variant='middle' />
						<Grid marginTop={1} marginBottom={1} container alignItems='center'>
							<Avatar variant='rounded'>JD</Avatar>
							<Grid marginLeft={1} item xs={2} md={1}>
								<Typography variant='subtitle1'>Jane Doe</Typography>
							</Grid>
							<Typography variant='caption' color='text.secondary'>
								8h ago
							</Typography>
							<Grid item xs={12} md={12} marginTop={1}>
								<Typography variant='body2'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</Typography>
							</Grid>
							<IconButton>
								<FavoriteBorderOutlinedIcon />
							</IconButton>
						</Grid>
						<Divider variant='middle' />
						<Grid marginTop={1} marginBottom={1} container alignItems='center'>
							<Avatar variant='rounded'>JD</Avatar>
							<Grid marginLeft={1} item xs={2} md={1}>
								<Typography variant='subtitle1'>Jane Doe</Typography>
							</Grid>
							<Typography variant='caption' color='text.secondary'>
								8h ago
							</Typography>
							<Grid item xs={12} md={12} marginTop={1}>
								<Typography variant='body2'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</Typography>
							</Grid>
							<IconButton>
								<FavoriteBorderOutlinedIcon />
							</IconButton>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default PostDetails;
