const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-body');
// import { scheduleCronstyle } from './crawler/schedule';
// const scheduleCronstyle fro
// const schedule = require('node-schedule');
// const { getEmail } = require('./../crawler/getEmail');

const data = require('./routes/data');

app.use(bodyParser());  // 解析request的body
app.use(data.routes());

scheduleCronstyle();

app.listen(5000, () => {
	console.log('Server running at port 5000');
});