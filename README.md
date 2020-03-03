
### 技术栈

vue + nodejs(koa) + mongodb

### 项目内容

运用邮件SMTP传输，生成图像的一个项目。

采用`node-mailer`获取邮件内容，存在`mongodb`的数据库中，采用`node-schedule`轮训更新数据库。

采用http2主动发送请求更新界面。

但是该项目本身设计有问题，现阶段废弃。