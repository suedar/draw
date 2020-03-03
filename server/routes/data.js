const Router = require('koa-router');
const router = new Router();
const controller = require('../controller');

router.get('/', async ctx => {
    ctx.body = 'hello world! create by suedar! my blog => http://suedar.github.io'
})
.get('/user', controller.preview.getPreview) // 页面点
.get('/preview', controller.user.getUserInfo) // preview

module.exports = router;