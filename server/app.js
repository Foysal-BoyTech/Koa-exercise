const koa = require('koa');
const serve = require('koa-static');
const router = require('./router');

const bodyParser = require('koa-bodyparser');


const app = new koa();
const port = 3000;
app.use(serve('client'));
app.use(bodyParser());
app.use(router.routes());


app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})
