const Router = require('koa-router');
const router = new Router();
const messageController = require('./controllers/message.controller')


router.get('/messages', messageController.getAllMessages);

module.exports = router;
