const { showProblem } = require("../modules/ProgrammingProblem")

module.exports = {
    name: "postproblems",
    alias: ['postproblems'],
    execute: async function(interact,arg){
        let result = await showProblem(Number(arg[1]))
        interact.message.edit(result)
    }
}