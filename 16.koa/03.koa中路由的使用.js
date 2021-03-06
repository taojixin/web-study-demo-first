const Koa = require('koa')
const userRouter = require('./router/uer')

const app = new Koa();

app.use((ctx, next) => {
  // ctx.response.body = "hello word"
  next();
})

app.use(userRouter.routes());
app.use(userRouter.allowedMethods())


app.listen(8000, () => {
  console.log("koa服务器启动成功");
})