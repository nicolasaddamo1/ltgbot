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
bot.help((ctx) => ctx.reply('Comandos disponibles: /start, /help, /time'));
bot.command('time', (ctx) => {
    const now = new Date();
    const time = now.toLocaleString();
    ctx.reply(`La fecha y hora actual es: ${time}`);
});
bot.launch();
console.log('🤖 Bot iniciado...');
