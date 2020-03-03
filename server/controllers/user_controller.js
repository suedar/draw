const User_col = require('./../models/user');

// [{
//     "fromEmail": "690372513@qq.com",
//     "nickName": "suedar",
//     "x": 10,
//     "y": 15,
//     "color": "blue"
// }]
// createTime:
const getUserInfo = async (ctx, next) => {
    try {
        let date = new Date();
        let start = new Date(`${data.getFullYear()} ${data.getMonth()}`);
        let res = await Comment.find({createTime: { $gte: start, $lt: date }});
        let total = res.length;
        ctx.body = {
            code: 200,
            msg: 'get preview success',
            data: {
                list: res,
                total
            }
        };
    } catch (e) {
        console.log(e);
        ctx.body = {
            code: 500,
            msg: 'server error!'
        }
    }
}

const addUser = async () => {

}

module.exports = {
    getUserInfo
}