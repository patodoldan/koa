import Koa from 'koa'
import BodyParser from 'koa-bodyparser'
import dotenv from 'dotenv'
dotenv.config()
import views from '@ladjs/koa-views'

const app = new Koa()
const port = process.env.PORT

// router
import router from './routes/mainRoutes'

// middlewares
const render = views(__dirname + '/views', {
    map: {
        html: 'underscore',
    },
    extension: 'ejs',
})
app.use(render)

app.use(router.routes()).use(router.allowedMethods())

app.use(BodyParser())

app.listen(port, () => {
    console.log(`Server corriendo ok en puerto ${port}`)
})
