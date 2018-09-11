const commando = require('discord.js-commando');

class whatCommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'what',
            group: 'pics',
            memberName: 'what',
            description: 'Sende ein Bild, das deine Verstörung beschreibt'
        });
    }

    async run(message, args){
        message.channel.sendMessage({files:["C:/Users/Jojo/Documents/discordbot/images/peasant.png"]});
    }
}

module.exports = whatCommand;