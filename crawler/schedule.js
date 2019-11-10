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

scheduleCronstyle();