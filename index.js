const { prefix, token } = require('./config.json');
const commando = require('discord.js-commando');
const bot = new commando.Client();
let points = require('./points.json');

bot.registry.registerGroup('random', 'Zufall');
bot.registry.registerGroup('pics', 'Memes');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('points', 'Punktevergabe');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(token);