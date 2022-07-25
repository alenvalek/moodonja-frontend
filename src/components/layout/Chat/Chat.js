import { Alert, Button, Card, Grid, Typography } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import styles from "./Chat.module.css";
import { io } from "socket.io-client";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { useLocation } from "react-router-dom";

// socket
const socket = io.connect("http://localhost:5000");

const Chat = ({ user }) => {
	const [isLookingForChat, setIsLookingForChat] = useState(false);
	const [isChatting, setIsChatting] = useState(false);
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState([]);
	const [error, setError] = useState("");
	const [recepient, setRecepient] = useState(null);
	const messageElement = useRef(null);
	const [canDisconnect, setCanDisconnect] = useState(false);
	const location = useLocation();

	const lookForChat = () => {
		setError("");
		socket.emit("chat-search", user._id);
		setIsLookingForChat(true);
	};

	const handleSendMessage = (e) => {
		setMessages([
			...messages,
			{ msgID: uuid(), user: user._id, body: newMessage },
		]);
		console.log(recepient);
		socket.emit("private-chat-send", {
			socketID: recepient.recepient.socketID,
			body: newMessage,
			user: user._id,
		});
		setNewMessage("");
	};

	const handleReceiveMsg = (data) => {
		setMessages([
			...messages,
			{ msgID: uuid(), body: data.body, user: data.user },
		]);
	};

	useEffect(() => {
		let recepient = null;
		socket.on("private-chat-receive", (data) => handleReceiveMsg(data));
		socket.on("found-chat", (data) => {
			if (!recepient) {
				setIsLookingForChat(false);
				setIsChatting(true);
				setRecepient(data);
				recepient = data;
				setCanDisconnect(true);
			}
		});
		socket.on("notFound-chat", (data) => {
			setError(data.msg);
		});
		socket.on("recepeint-remove", () => {
			setIsChatting(false);
			setIsLookingForChat(true);
			setRecepient(null);
			recepient = null;
			setCanDisconnect(false);
			setError("User has disconnected from the chat");
		});
		return () => {
			if (recepient) {
				socket.emit("private-chat-disconnect", {
					socketID: recepient.recepient.socketID,
				});
			}
		};
	}, [messages]);

	// scroll do dna
	useEffect(() => {
		if (messageElement && messageElement.current) {
			messageElement?.current.scrollIntoView({ behaviour: "smooth" });
		}
	}, [messages]);

	return (
		<Card elevation={5} sx={{ marginTop: "4rem", height: "700px" }}>
			<Grid
				container
				justifyContent='center'
				alignItems='center'
				minHeight='100%'>
				{!isLookingForChat && !isChatting && (
					<Grid item xs={12} textAlign='center'>
						<Button variant='contained' color='primary' onClick={lookForChat}>
							start chat
						</Button>
					</Grid>
				)}
				{isLookingForChat && !isChatting && !error && (
					<Grid item xs={12} textAlign='center'>
						<Typography variant='h4'>Finding a user to chat with..</Typography>
					</Grid>
				)}
				{error && (
					<Grid item xs={6} textAlign='center'>
						<Alert variant='standard' color='error'>
							{error}
						</Alert>
						<Button
							sx={{ marginTop: "1rem" }}
							variant='contained'
							color='primary'
							onClick={lookForChat}>
							Try Again
						</Button>
					</Grid>
				)}
				{!isLookingForChat && isChatting && (
					<Grid item xs={12} textAlign='center'>
						<Card elevation={12} sx={{ margin: "1rem" }}>
							<div className={styles.chatContainer}>
								{messages &&
									messages.length > 0 &&
									messages.map((message) =>
										message.user === user._id ? (
											<div
												key={message.msgID}
												className={styles.messageContainerTwo}>
												<div className={styles.msgMe}>
													<p>{message.body}</p>
													<div className={styles.chatTriangleMe}></div>
												</div>
											</div>
										) : (
											<div
												key={message.msgID}
												className={styles.messageContainer}>
												<div className={styles.msgYou}>
													<p>{message.body}</p>
													<div className={styles.chatTriangleYou}></div>
												</div>
											</div>
										)
									)}
								<div ref={messageElement}></div>
							</div>
							<div className={styles.inputs}>
								<input
									type='text'
									value={newMessage}
									onChange={(e) => setNewMessage(e.target.value)}></input>
								<button className='btn btn-primary' onClick={handleSendMessage}>
									<SendIcon />
								</button>
							</div>
						</Card>
					</Grid>
				)}
			</Grid>
		</Card>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps)(Chat);
