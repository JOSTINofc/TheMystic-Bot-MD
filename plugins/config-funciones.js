const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `╭🌹⸽⃕DɪᴀʙʟᴀBᴏᴛ-MD🍁⃨፝⃕✰
❘➥ ❥⃤⚓️ !enable welcome
❘➥ ❥⃤⚓️ !disable welcome
❘➥ ❥⃤🌐 !enable public
❘➥ ❥⃤🌐 !disable public
❘➥ ❥⃤🌐 !enable privado
❘➥ ❥⃤🌐 !disable privado
❘➥ ❥⃤🔥 !enable juegos
❘➥ ❥⃤🔥 !disable juegos
❘➥ ❥⃤🧸 !enable modohorny
❘➥ ❥⃤🧸 !disable modohorny
❘➥ ❥⃤🖇️ !enable antilink
❘➥ ❥⃤🖇️ !disable antilink
❘➥ ❥⃤🖇️ !enable antilink2
❘➥ ❥⃤🖇️ !disable antilink2
❘➥ ❥⃤🖊️ !enable detect
❘➥ ❥⃤🖊️ !disable detect
❘➥ ❥⃤🖊️ !enable detect2
❘➥ ❥⃤🖊️ !disable detect2
❘➥ ❥⃤🎭 !enable restrict
❘➥ ❥⃤🎭 !disable restrict
❘➥ ❥⃤🔮 !enable autoread
❘➥ ❥⃤🔮 !disable autoread
❘➥ ❥⃤🛡️ !enable audios
❘➥ ❥⃤🛡️ !disable audios
❘➥ ❥⃤🛡️ !enable autosticker
❘➥ ❥⃤🛡️ !disable autosticker
❘➥ ❥⃤🛡️ !enable antiviewonce
❘➥ ❥⃤🛡️ !disable antiviewonce
❘➥ ❥⃤🛡️ !enable antitoxic
❘➥ ❥⃤🛡️ !disable antitoxic
❘➥ ❥⃤🛡️ !enable reaction
❘➥ ❥⃤🛡️ !disable reaction
❘➥ ❥⃤🛡️ !enable antitraba
❘➥ ❥⃤🛡️ !disable antitraba
❘➥ ❥⃤📡 !enable pconly
❘➥ ❥⃤📡 !disable pconly
❘➥ ❥⃤📡 !enable gconly
❘➥ ❥⃤📡 !disable gconly
❘➥ ❥⃤👤 !enable anticall
❘➥ ❥⃤👤 !disable anticall
❘➥ ❥⃤👤 !enable antirabes
❘➥ ❥⃤👤 !disable antirabes
❘➥ ❥⃤👤 !enable antirabes2
❘➥ ❥⃤👤 !disable antirabes
❘➥ ❥⃤🌹 !enable modoadmin
❘➥ ❥⃤🌹 !disable modoadmin
❘➥ ❥⃤🌹 !enable simsimi
❘➥ ❥⃤🌹 !disable simsimi
❘➥ ❥⃤🌹 !enable antispam
❘➥ ❥⃤🌹 !disable antispam
❘➥ ❥⃤🌹 !enable modoia
❘➥ ❥⃤🌹 !disable modoia
╰━━━━━━━✦✗✦━━━━━━━━
𝘉𝘺: 𝘌𝘯𝘻𝘰𝘖𝘧𝘪𝘤𝘪𝘢𝘭✨`.trim();

            const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
      case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break;
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
     conn.sendMessage(m.chat, {text: `ꨄ︎ *🌻 Tipo*: ${type}\nꨄ︎ *💖 Estado*: ${isEnable ? 'Activo ✅️' : 'Desactivo ❎️'}\nꨄ︎ *🥀 Para*: ${isAll ? '𝘿𝙞𝙖𝙗𝙡𝙖𝘽𝙤𝙩-𝙈𝘿 ' : isUser ? '' : 'Este Chat'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;
export default handler;
