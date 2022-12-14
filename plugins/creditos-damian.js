import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `𝗟𝗜𝗦𝗧 𝗢𝗙 𝗠𝗘𝗡𝗨𝗦`,
rows: [
      {title: "ꨄ︎𝗨𝗠𝗔𝗥 ꨄ︎", description: '𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗢𝗙 𝗖𝗥𝗘𝗔𝗧𝗢𝗥', rowId: `${usedPrefix}donar`},
      {title: "✪𝗗𝗔𝗥𝗞 𝗗𝗘𝗩𝗜𝗟✪ ", description: '𝗖𝗼𝗻𝘁𝗮𝗰𝘁', rowId: `${usedPrefix}hiro`},
      {title: "✪𝗨𝗠𝗔𝗥✪", description: '𝗖𝗼𝗻𝘁𝗮𝗰𝘁', rowId: `${usedPrefix}damian`},
      {title: "<𝘅𝗗>", description: '𝗖𝗼𝗻𝘁𝗮𝗰𝘁', rowId: `${usedPrefix}xd`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 𝗛𝗘𝗟𝗟𝗢 𝗠𝗔𝗛 𝗟𝗢𝗩𝗘 _${name}_ 💖彡*
Contacto: +92 316 5123719 
Gmail: ////
Easypaisa : 03475589080 `, footer: `${wm}`, pp,
title: null,
buttonText: "𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗖𝗢𝗟𝗔𝗕𝗢𝗥𝗔𝗗𝗢𝗥𝗘𝗦", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(damian|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
