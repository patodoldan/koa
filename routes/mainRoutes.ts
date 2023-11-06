import Router from 'koa-router'
const router = new Router()

import { index } from '../controllers/homeController'

router.get('/', index)

export default router
