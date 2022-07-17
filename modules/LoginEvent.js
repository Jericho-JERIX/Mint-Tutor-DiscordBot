const { translate } = require('free-translate');
const axios = require('axios')
const RANDOM_WORD_API = 'https://wordsapiv1.p.rapidapi.com/words/'
const API_KEY = {
    'X-RapidAPI-Key': '536fcf1431msh1d977bdbf386f23p11b87ejsnd51bfc3027a5',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
  }


async function randomVocab(){
    const { data } = await axios.get(RANDOM_WORD_API,{headers: API_KEY,params: {random: 'true'}})
    console.log(data)
    const translated = await translate(data.word, { from: 'en', to: 'th' })
    return {en: data.word, th: translated}
}

module.exports = {
    // setPresence: function(client){
    //     client.user.setPresence({
    //         activities: [{
    //             name: "ลองกด",
    //             type: 3,
    //             url: "https://www.youtube.com/watch?v=diRDTYVy0bo"
    //         }]
    //     })
    // }
}