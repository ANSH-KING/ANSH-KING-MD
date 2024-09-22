const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu2",
    react: "👾",
    desc: "get cmd list",
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

│ PREFIX: ${prefix}
│ TIME: ${currentTime}
│ DAY: ${currentDay}
│ DATE: ${currentDate}
│ PLUGINS: ${commands.length}
│ RUNTIME: ${runtime(process.uptime())}
│ MEMORY: ${getRAMUsage()}
│ OS: ${getOS()}
│ VERSION: ${require("../package.json").version}
╰────────────────${readmore}\n`;
❁ ════ ❃•◯•❃ ════ ❁

╭━━━⊱ 👤 *MENU2* 👤 ⊱━━━╮

*❖ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ❖*

*ᴛʜᴇ ᴡᴏʀʟᴅ ʙᴇsᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²*
       
  ╰━━━━━━━━━━━━━━━━╯

❁ ════ ❃•◯•❃ ════ ❁
*_🧑‍💻https://github.com/SILENTLOVER4/SILENT-SOBX-MD🧑‍💻_*
❁ ════ ❃•◯•❃ ════ ❁
⇩━━━━━━━━❁━━━━━━━━⇩

╔═.✵.═════════.✵.═╗
> *❂ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.download}
❁ ════ ❃•⇆•❃ ════ ❁

╔═.✵.═════════.✵.═╗
> *❂ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.main}
❁ ════ ❃•⇆•❃ ════ ❁

╔═.✵.═════════.✵.═╗
> *❂ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.group}
❁ ════ ❃•⇆•❃ ════ ❁

╔═.✵.═════════.✵.═╗
> *❂ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.owner}
❁ ════ ❃•⇆•❃ ════ ❁

╔═.✵.═════════.✵.═╗
> *❂ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.convert}
❁ ════ ❃•⇆•❃ ════ ❁

╔═.✵.═════════.✵.═╗
> *❂sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.search}
❁ ════ ❃•⇆•❃ ════ ❁

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛ_ʟᴏᴠᴇʀ⁴³²*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
