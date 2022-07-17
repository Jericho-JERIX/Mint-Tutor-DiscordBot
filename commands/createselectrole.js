const {MessageButton,MessageActionRow} = require('discord.js')

const Instructor = "<@&985887344504746006>"
const KanonKC = "<@226919303700676610>"
const General = "<#985879442717036547>"

const Annoucement = `
:pushpin: **สำหรับคนที่เข้ามาใหม่**

เข้าไปเลือกระดับชั้นของตัวเองได้ที่ด้านล่างนี้ หลังจากกดเลือกแล้วจะเห็น \`💬 ห้องแชท\` กับ \`💻 ห้องเรียน\` ของชั้นตัวเอง
โดยจะมีแค่คนที่อยู่ชั้นเดียวกัน กับคนสอน (${Instructor}) เท่านั้นที่จะเห็นห้องนี้ได้

****สำหรับคนสอนถ้ายังไม่ได้ ${Instructor} ขอให้ทักส่วนตัวมานะครับ (จะไม่มีให้กดรับ Role นะครับ)**

ห้อง ${General} เป็นห้องคุยรวมสำหรับทุกคน ทุกคนสามารถมองเห็นห้องนี้ได้

ถ้าเจอปัญหาระหว่างการใช้งาน หรือต้องการเพิ่มห้องใดๆ สามารถแจ้งมาได้ที่ ${KanonKC}
`

const ClassSelector = [
    new MessageActionRow().addComponents(
        new MessageButton().setLabel("✏️ Elementary (ประถม)").setStyle("DANGER").setCustomId("classselector-p")
    ),
    new MessageActionRow().addComponents(
        new MessageButton().setLabel("🖊️ Secondary 1 (ม.1)").setStyle("SUCCESS").setCustomId("classselector-m1"),
        new MessageButton().setLabel("🖊️ Secondary 2 (ม.2)").setStyle("SUCCESS").setCustomId("classselector-m2"),
        new MessageButton().setLabel("🖊️ Secondary 3 (ม.3)").setStyle("SUCCESS").setCustomId("classselector-m3")
    ),
    new MessageActionRow().addComponents(
        new MessageButton().setLabel("🖋️ Secondary 4 (ม.4)").setStyle("PRIMARY").setCustomId("classselector-m4"),
        new MessageButton().setLabel("🖋️ Secondary 5 (ม.5)").setStyle("PRIMARY").setCustomId("classselector-m5"),
        new MessageButton().setLabel("🖋️ Secondary 6 (ม.6)").setStyle("PRIMARY").setCustomId("classselector-m6")
    )
]

module.exports = {
    name: "createclassselector",
    alias : ['createclassselector','ccs'],
    clearCommand: true,
    roleRequirement: ["985887344504746006","586508284660285450"],
    channelRequirement: ["897797648130654258","985938990068813894","985889110248026132"],
    execute: function(message,arg){
        message.channel.send({
            content: `${Annoucement}==============================================================================\n✅ **เลือกระดับชั้นของตัวเอง**`,
            components: ClassSelector
        })
        return 0
    }
}
