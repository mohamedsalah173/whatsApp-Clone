import { io } from 'socket.io-client';

const URL ='http://localhost:3000';

export default io(URL);