const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
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
}, { collection: 'user', versionKey: false});

module.exports = mongoose.model('user', UserSchema);

// {
//     "fromEmail": "690372513@qq.com",
//     "nickName": "suedar",
//     "x": 10,
//     "y": 15,
//     "color": "blue"
// }