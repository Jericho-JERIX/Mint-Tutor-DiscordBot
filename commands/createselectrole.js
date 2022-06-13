const {Client,Intents,MessageButton,MessageActionRow, Message} = require('discord.js')

const ClassSelector = [
    new MessageActionRow().addComponents(
        new MessageButton().setLabel("Elementary (ประถม)").setStyle("DANGER").setCustomId("classselector-p")
    ),
    new MessageActionRow().addComponents(
        new MessageButton().setLabel("Secondary 1 (ม.1)").setStyle("SUCCESS").setCustomId("classselector-m1"),
        new MessageButton().setLabel("Secondary 2 (ม.2)").setStyle("SUCCESS").setCustomId("classselector-m2"),
        new MessageButton().setLabel("Secondary 3 (ม.3)").setStyle("SUCCESS").setCustomId("classselector-m3")
    ),
    new MessageActionRow().addComponents(
        new MessageButton().setLabel("Secondary 4 (ม.4)").setStyle("PRIMARY").setCustomId("classselector-m4"),
        new MessageButton().setLabel("Secondary 5 (ม.5)").setStyle("PRIMARY").setCustomId("classselector-m5"),
        new MessageButton().setLabel("Secondary 6 (ม.6)").setStyle("PRIMARY").setCustomId("classselector-m6")
    )
]

module.exports = {
    name: "createclassselector",
    alias : ['createclassselector','ccs'],
    roleRequirement: ["985887344504746006"],
    execute: function(message){
        message.channel.send("เลือกระดับชั้น")
        message.channel.send({components: [ClassSelector[0]]})
        message.channel.send({components: [ClassSelector[1]]})
        message.channel.send({components: [ClassSelector[2]]})
        return 0
    }
}