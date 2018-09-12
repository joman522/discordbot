const commando = require('discord.js-commando');
const bot = new commando.Client({
    commandPrefix:'!',
    owner:'joman522',
    disableEveryone: true
});
const token = process.env.token;
const fs = require ('fs');

bot.points = require('./points/points.json');

bot.registry.registerGroup('random', 'Zufall');
bot.registry.registerGroup('pics', 'Memes');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('points', 'Punktevergabe');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(token).catch(err => console.log(err));