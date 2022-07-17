const { showProblem } = require("../modules/ProgrammingProblem")

module.exports = {
    name: "postproblems",
    alias: ['postproblems'],
    execute: async function(interact,arg){
        interact.deferUpdate()
        let result = await showProblem(Number(arg[1]))
        interact.message.edit(result)
    }
}