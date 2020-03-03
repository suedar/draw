const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PreviewSchema = new Schema({
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
}, { collection: 'preview', versionKey: false});

module.exports = mongoose.model('preview', PreviewSchema);

// {
//     "id": 0,
//     "url": "https://randomm.cdn.bcebos.com/draw%2Fp1.jpeg",
//     "createTime": "2019-10-11",
//     "owner": ["suedar(690372513@qq.com)", "qqqq(693372513@qq.com)", "eeee(690372513@qq.com)", "ff(690372513@qq.com)"]
// }