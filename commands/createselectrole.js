const {Client,Intents,MessageButton,MessageActionRow, Message} = require('discord.js')

const ClassSelector = new MessageActionRow().addComponents(
    new MessageButton().setLabel("Elementary").setStyle("PRIMARY").setCustomId("classselect-p"),
    new MessageButton().setLabel("Secondary 1").setStyle("PRIMARY").setCustomId("classselect-m1"),
    new MessageButton().setLabel("Secondary 2").setStyle("PRIMARY").setCustomId("classselect-m2"),
    new MessageButton().setLabel("Secondary 3").setStyle("PRIMARY").setCustomId("classselect-m3"),
    new MessageButton().setLabel("Secondary 4").setStyle("PRIMARY").setCustomId("classselect-m4"),
    new MessageButton().setLabel("Secondary 5").setStyle("PRIMARY").setCustomId("classselect-m5"),
    new MessageButton().setLabel("Secondary 6").setStyle("PRIMARY").setCustomId("classselect-m6")
)

module.exports = {
    name: "createselectrole",
    alias : [],
    roleRequirement: ["985887344504746006"],
    execute: function(message){
        message.channel.send({content: "อยู่ชั้นอะไร",components: ClassSelector})
    }
}