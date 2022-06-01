import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use estos comandos sin el prefijo_




┌─⊷ *AUDIOS* 
▢ Bot
▢ Buenos días
▢ Buenas tardes 
▢ Buenas noches
└──────────────
┌─⊷ *VIDEO/GIF* 
▢ Linda noche
└──────────────`
const pp = await (await fetch('https://i.ibb.co/b2k64vJ/avatar-contact.jpg')).buffer()
    
    conn.sendHydrated(m.chat, m2, '▢ CARDINAL  ┃ BOT\n▢', pp, '', '', null, null, [
     ['⏍ Info', '/botinfo'],
 
    ], m)
    
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2'] 
handler.register = true
export default handler
