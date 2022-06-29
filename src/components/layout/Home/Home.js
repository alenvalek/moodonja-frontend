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
} from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PostCardList from "../Posts/PostCardList";

const Home = () => {
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
							placeholder='Što ti je na umu?'
						/>
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
					<CardActions>
						<IconButton color='primary'>
							<AddPhotoAlternateOutlinedIcon />
						</IconButton>
						<IconButton color='primary'>
							<AddLocationAltOutlinedIcon />
						</IconButton>
						<IconButton color='primary'>
							<PersonOutlinedIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Grid>
			<Grid item xs={12} marginTop={4} align='center'>
				{/* <Typography variant='h4'>
					Trenutno nema objava na tvojoj vremenskoj crti.. 😥
				</Typography> */}
				<PostCardList />
			</Grid>
		</Grid>
	);
};

export default Home;
