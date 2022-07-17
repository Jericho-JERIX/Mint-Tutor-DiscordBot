const {Client,Intents,MessageButton,MessageActionRow, Message} = require('discord.js')

const ClassRole = {
    "p"  : '985887062496530522',
    "m1" : '985887048810524702',
    "m2" : '985887033153171527',
    "m3" : '985887017294499840',
    "m4" : '985886678302478368',
    "m5" : '985886440103743528',
    "m6" : '985885547807526982'
}

async function removeAllClass(interact){
    for(var i in ClassRole){
        await interact.member.roles.remove(interact.guild.roles.cache.get(ClassRole[i]))
    }
}

module.exports = {
    name: "classselector",
    alias: ['classselector'],
    execute: async function(interact,arg){
        await removeAllClass(interact)
        await interact.member.roles.add(interact.guild.roles.cache.get(ClassRole[arg[1]]))
        interact.deferUpdate()
    }
}