const axios = require('axios')
const API_PROBLEMS = "http://localhost:8000/mint-tutor/problems"
const RegionNumber = [
    ":zero:",":one:",":two:",":three:",":four:",":five:",":six:",":seven:",":eight:",":nine:"
]

function createRegionalText(text){
    let result = ""
    for(var i in text){
        result += `:regional_indicator_${text[i].toLowerCase()}: `
    }
    return result
}

function createRegionalNumber(num){
    let str_num = String(num)
    if(str_num.length < 2)
        return `${RegionNumber[0]} ${RegionNumber[Number(num)]}`
    return `${RegionNumber[Number(str_num[0])]} ${RegionNumber[Number(str_num[1])]}`
}

async function getProblem(week_no){
    const { data } = await axios.get(`${API_PROBLEMS}?week=${week_no ? week_no : 0}`)
    return data
}

module.exports = {
    showProblem: async function(week_no){
        const Week = await getProblem(week_no)
        let result = `\`\`\`📌 Week ${Week.week_no} - ${Week.title}\`\`\``

        for(var i in Week.problems){
            result += `${createRegionalNumber(Week.problems[i].number)} ${Week.problems[i].name} ${Week.problems[i].link}\n`
        }
        
        return result
    }
}

// Module.showProblem(1).then((data)=>{
//     console.log(data)
// })

// console.log(createRegionalText("problem"))