const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'würfel',
            group: 'random',
            memberName: 'roll',
            description: 'Würfle einen sechsseitigen Würfel'
        });
    }

    async run(message, args){
        
        var roll = Math.floor(Math.random() * args) + 1;
        message.reply("du hast eine " + roll + " gewürfelt")
    }
}

module.exports = DiceRollCommand