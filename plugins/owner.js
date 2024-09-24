const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    react: "👑",
    desc: "get owner number",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `➺${commands[i].pattern}\n`;
 }
}

let madeMenu = `❁ ════ ❃•◯•❃ ════ ❁

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*

❁ ════ ❃•◯•❃ ════ ❁

*ʜᴇʀᴇ ɪs ʙᴏᴛ ᴏᴡɴᴇʀ ɪɴғᴏ*

⇩━━━━━━━━❁━━━━━━━━⇩
┝ *ɴᴀᴍᴇ:* *ᴜsᴍᴀɴ.s*
┝ *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ:* *sɪʟᴇɴᴛ ʟᴏᴠᴇʀ*
┝ *ɴɪᴄᴋ ɴᴀᴍᴇ:* *sᴏɴᴜ*
┝ *ᴀɢᴇ:* *19*
┝ *ғᴀᴠᴏʀɪᴛᴇ ᴄᴏʟᴏʀ:* *ʙʟᴀᴄᴋ*
┝ *ғᴀᴠᴏʀɪᴛᴇ ᴀᴘᴘ:* *ᴡʜᴀᴛsᴀᴘᴘ*
┝ *ᴄᴏɴᴛᴀᴄᴛ* *wa.me/+923096287432* 
❁ ════ ❃•⇆•❃ ════ ❁

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛ_ʟᴏᴠᴇʀ⁴³²*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
