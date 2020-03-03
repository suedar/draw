import nodemailer from 'node-mailer';


let transporter = nodemailer.createTransport({
    host: 'imap.163.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'justfordraw@163.com', // generated ethereal user
        pass: '******'// generated ethereal password
    }
});
// 创建Nodemailer传输器

// fromEmail: '690372513@qq.com',
// nickName: 'suedar',
// x: 'x',
// y: ' y',
// color: '#ccc'
// 最大为50
const filterArr = function(arr) {
    arr.map(item => {
        if (x >= 50 || y >= 50) {
            item.res = {
                isCorrect: false,
                msg: '超过画布最大大小，请设置x和y在50以内'
            };
        }
        else {
            item.res = {
                isCorrect: true
            }
        }
        return item;
    })
}

const sendFeedback = function(item) {
    let mailOptions = {
        from: 'suedar<justfordraw@163.com>', // sender address
        to: 'xxx@qq.com', // list of receivers
        subject: 'Feedback', // Subject line
        text: `Thanks for playing this game, ${item.res.isCorrect ? 'your point will be draw in a day' : 'item.res.msg'} `, // plain text body
        // html: '<b>Hello world?</b>' // html body
    };
    // 设置消息选项

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    // sendMail()方法传递消息对象
}

function sendMsg(arr) {
    let mapArr = filterArr(arr);
    mapArr.forEach(element => {
        sendFeedback(element);
    });
}

export {
    sendMsg
}