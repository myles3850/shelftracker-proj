import express from 'express';

const server = express();
const port = 3000;

server.get('/', (req, res ) => {
	console.log(req);
	res.send('all is working');
})

server.listen(port, () => {
	console.log(`Server online on post ${port}`);
});
