const messageModel = require('../models/message.model');

async function getAllMessages (ctx) {
    try {
      const messages = await messageModel.findAll();
      ctx.body = messages;
      ctx.status = 200;
      console.log(ctx);
    }
    catch (err) {
      ctx.status = 404;
    }
  }


module.exports = getAllMessages;