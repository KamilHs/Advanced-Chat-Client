import io from "socket.io-client";

const API_URL = "localhost:5555";

const socket = io(API_URL);

export default socket;