// {
//     "fromEmail": "690372513@qq.com",
//     "nickName": "suedar",
//     "x": 10,
//     "y": 15,
//     "color": "blue"
// }

const mongoose = require('mongoose')
// 类似于mysql的表 MongoDB里有文档、字段的概念
export const User = mongoose.model('user', new mongoose.Schema({
    fromEmail: {
        type: String,
        required: true
    },
    nickName: {
        type: Number,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}))

// {
//     "id": 0,
//     "url": "https://randomm.cdn.bcebos.com/draw%2Fp1.jpeg",
//     "createTime": "2019-10-11",
//     "owner": ["suedar(690372513@qq.com)", "qqqq(693372513@qq.com)", "eeee(690372513@qq.com)", "ff(690372513@qq.com)"]
// }

export const Preview = mongoose.model('preview', new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    createTime: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
}));