import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[โ] ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐๐ฝ ๐ฟ๐ฐ๐ธ๐, ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ ${usedPrefix + command} Mexico*`
let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.confirmed) throw 'Paรญs?'
if (json.confirmed) m.reply(`
๐ Paรญs : ${text}
โConfirmado : ${json.confirmed.value}
๐curado : ${json.recovered.value}
โ ๏ธMuertes : ${json.deaths.value}
๐Info Actualizada : ${json.lastUpdate}
`.trim())
else throw json
}
handler.help = ['covid'].map(v => v + ' <paรญs>')
handler.tags = ['info']
handler.command = /^(corona|covid|covid19)$/i
export default handler
