const koa = require('koa')
const app = koa()

const userRouter = require('./router/user')

app.use(userRouter.legacyMiddleware())
app.use(function * () {
  console.log('koa use')
  this.body = { name: 'koa use' }
})

app.listen(9019, function () {
  console.log('Server is listening on http://localhost:9019')
  userRouter.getRoutes().forEach((route) => {
    console.log(`${route.method} http://localhost:9019${route.path}`)
  })
})
