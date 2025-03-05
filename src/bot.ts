import { Telegraf } from 'telegraf';
import { config } from 'dotenv';

config({
    path: './.env'
});

if (!process.env.TOKEN) {
    throw new Error('El token de Telegram no está definido en el archivo .env');
}
const bot = new Telegraf(process.env.TOKEN!);



bot.start((ctx) => ctx.reply('¡Hola! Soy tu bot de Telegram 🤖'));
bot.help((ctx) => ctx.reply('Envíame un mensaje y te responderé.'));
bot.on('text', (ctx) => ctx.reply(`Recibí tu mensaje: ${ctx.message.text}`));

bot.launch();
console.log('🤖 Bot iniciado...');
