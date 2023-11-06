import Koa from 'koa'
import { fetchEndpoints } from '../services/myApi'

export const index = async (ctx: Koa.Context) => {
    const data = await fetchEndpoints()

    await ctx.render('home', {
        title: "API's",
        data: data,
    })
}
