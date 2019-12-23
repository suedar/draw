const schedule = require('node-schedule');
const { getEmail } = require('./getEmail');

const scheduleCronstyle = () => {
    // 每分钟的第30秒定时执行一次:
    schedule.scheduleJob('30 * * * * *', () => {
        getEmail(arr => {
            console.log(arr)
        })
    });
}
// fromEmail: '690372513@qq.com',
// nickName: 'suedar',
// x: 'x',
// y: ' y',
// color: '#ccc'
getEmail(arr => {
    console.log(arr);
});
scheduleCronstyle();