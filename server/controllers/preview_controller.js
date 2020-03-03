const Preview_col = require('./../models/preview');

// pageSize: 9,
// pageIndex: 1

const getPreview = async (ctx, next) => {
    const req = ctx.request.body;
    if (!req.pageSize || !req.pageIndex) {
        ctx.body = {
            code: 401,
            msg: 'lack of params'
        }
        return;
    }
    try {
        let {pageSize = 10, pageIndex = 1} = ctx.query;
        let options = {
            skip: Number((pageIndex - 1) * pageSize),
            limit: Number(pageSize),
            // sort: {"create_time":"-1"},
            // populate: {
            //   path: 'user_id',
            //   select: "_id user_name avatar"
            // }
        }
        let res = await Comment.find({}, null, options);
        let total = await Comment.countDocuments();
        ctx.body = {
            code: 200,
            msg: 'get preview success',
            data: {
                list: res,
                pagination: {
                    total,
                    page : Number(page),
                    size : Number(size)
                }
            }
        }
    } catch (error) {
        console.log(e);
        ctx.body = {
            code: 500,
            msg: 'server error!'
        }
    }
}

module.exports = {
    getPreview
}