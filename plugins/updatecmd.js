const fs = require('fs');
const path = require('path');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
  pattern: "updatecmd",
  desc: "Update commands.",
  react: "🚸",
  category: "owner",
  filename: __filename
}, async (conn, mek, m, {
  from,
  l,
  quoted,
  body,
  isCmd,
  umarmd,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!isOwner) return reply("Only bot owners can use this command.");
    
    const pluginsDir = path.join(__dirname, '../plugins');
    const files = fs.readdirSync(pluginsDir);
    
    for (const file of files) {
      if (file.endsWith('.js')) {
        const filePath = path.join(pluginsDir, file);
        require(filePath);
        console.log(`Loaded ${file}`);
      }
    }
    
    // Restart bot after updating plugins
    console.log("Restarting bot...");
    process.exit(0);
    
  } catch (e) {
    console.log(e);
    reply(`Error updating commands: ${e.message}`);
  }
});
