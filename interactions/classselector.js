const {Client,Intents,MessageButton,MessageActionRow, Message} = require('discord.js')
const { ClassRole } = require('../constants/roles.constant')

async function removeAllClass(interact){
    for(var i in ClassRole){
        await interact.member.roles.remove(interact.guild.roles.cache.get(ClassRole[i]))
    }
}

module.exports = {
    name: "classselector",
    alias: ['classselector'],
    execute: async function(interact,arg){
    	interact.deferUpdate()
        await removeAllClass(interact)
	    await interact.member.roles.add(interact.guild.roles.cache.get(ClassRole[arg[1]]))
    }
}