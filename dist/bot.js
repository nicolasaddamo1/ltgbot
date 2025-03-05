"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: './.env'
});
if (!process.env.TOKEN) {
    throw new Error('El token de Telegram no está definido en el archivo .env');
}
const bot = new telegraf_1.Telegraf(process.env.TOKEN);
bot.start((ctx) => ctx.reply('¡Hola! Soy tu bot de Telegram 🤖'));
bot.help((ctx) => ctx.reply('Envíame un mensaje y te responderé.'));
bot.on('text', (ctx) => ctx.reply(`Recibí tu mensaje: ${ctx.message.text}`));
bot.launch();
console.log('🤖 Bot iniciado...');
//# sourceMappingURL=bot.js.map