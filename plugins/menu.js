cmd({

    pattern: "menu",

    react: "🪀",

    alias: ["panel","list","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{

let menumg =`*Hello* ${pushname}

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *Welcome to UD MD Full Cammand List*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*Created By Umar Rehman👨🏻‍💻*

\`\`\`\
╭──❮ 𝗗𝗢𝗪𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ❯
│
│📖 COMMAND: .song
│ℹ️ Download song from yt
│ 
│📖 COMMAND: .apk
│ℹ️ Download apk from playstore
│ 
│📖 COMMAND: .video
│ℹ️ Download video from yt
│ 
│📖 COMMAND: .fb
│ℹ️ Download  video from fb
│ 
│📖 COMMAND: .tk
│ℹ️ Download video from tiktok
│ 
│📖 COMMAND: .ig
│ℹ️ Download video from ig
│ 
│📖 COMMAND: .gdrive
│ℹ️ Download drive files
│ 
│📖 COMMAND: .wamod
│ℹ️ Download wamod apk
│
│📖 COMMAND: .img
│ℹ️ Download image
│
│📖 COMMAND: .xvideo
│ℹ️ Download xxx video
╰────────────⦁ 

╭──❮ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ❯
│
│📖 COMMAND: .yts
│ℹ️ Serch videos from yt
╰────────────⦁  

╭──❮‍ 𝗣𝗥𝗜𝗠𝗔𝗥𝗬 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ❯
│
│📖 COMMAND: .alive
│ℹ️ Check online or not
│  
│📖 COMMAND: .ping
│ℹ️ Check bot speed
│  
│📖 COMMAND: .menu
│ℹ️ Nero main menu
╰────────────⦁

╭──❮ 𝗢𝗧𝗛𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ❯
│
│📖 COMMAND: .hirunews/news
│ℹ️ Get news result for life
│ 
│📖 COMMAND: .wabeta
│ℹ️ Get whatsapp beta news
│ 
│📖 COMMAND: .sitech
│ℹ️ Get tech news
│ 
│📖 COMMAND: .nasa
│ℹ️ Get nasa news
╰────────────⦁

╭──❮ 𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ❯
│
│📖 COMMAND: .mute
│ℹ️ Mute group
│
│📖 COMMAND: .unmute
│ℹ️ Unmute group
│
│📖 COMMAND: .left
│ℹ️ left group
│
│📖 COMMAND: .jid
│ℹ️ group jid
╰────────────⦁
╰────────────⦁
\`\`\`\``

 await conn.sendMessage(from, { audio: fs.readFileSync('./src/menu.aac') , ptt: true  , mimetype: 'audio/mpeg'}, { quoted: mek })  
await conn.sendMessage(from, { image: { url: config.LOGO }, caption: menumg }, { quoted: mek })

} catch (e) {

}

})
