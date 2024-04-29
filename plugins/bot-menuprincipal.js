import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];

 const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    //await conn.reply(m.chat, '*Il menu del bot verrà inviato a breve...*', fkon, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '💜 Ciao', body: 'L'amore conquista tutto 💋', sourceUrl: global.yt, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📍');
  let txt =`╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║🌹 \`𝐃𝐢𝐚𝐛𝐥𝐚𝐁𝐨𝐭-𝐌𝐃\` 🌸
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║💋 Ciao ${taguser} Spero che questo bot ti piaccia
║🚩 *Data:* ${date}
╚◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║✨ \`𝙄𝙣𝙛𝙤 𝙐𝙨𝙪𝙖𝙧𝙞𝙤\` ✨
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║🚻 \`𝙉𝙄𝙑𝙀𝙇\` ➝ ${level}
║•┄┄┄┄┄┄┄┄┄┄┄•
║💎 \`𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎\` ➝ ${limit}
║•┄┄┄┄┄┄┄┄┄┄┄•
║💰 \`𝘾𝙊𝙄𝙉𝙎\` ➝ ${money}
║•┄┄┄┄┄┄┄┄┄┄┄•
║⚔️ \`𝙍𝘼𝙉𝙂𝙊\` ➝ ${role}
║•┄┄┄┄┄┄┄┄┄┄┄•
║♨️ \`𝙀𝙓𝙋\` ➝ ${exp}
╚◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝


╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║        🌻 \`𝙄𝙣𝙛𝙤 𝘽𝙤𝙩\` 🌻
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#contactos_
> _#cuentasnz_
> _#creador_
> _#donar_
> _#tipobot_
> _#estado_
> _#infobot_
> _#gruponz_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║            🌍 \`𝙏𝙧𝙪𝙚 𝙔 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨\` 🌍
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#true *antiprivado*_ 
> _#true *restrict*_
> _#true *autoread*_
> _#true *antispam*_
> _#true *anticall*_
> _#true *welcome*_
> _#true *antilink2*_
> _#true *antilink*_
> _#true *detect*_
> _#true *autosticker*_
> _#true *antiviewonce*_
> _#true *antitoxic*_
> _#true *antiarabes*_
> _#true *modoadmin*_
> _#true *antidelete*_
> _#true *public*_
> _#true *pconly*_
> _#mediafire *url*_
> _#gitclone *url*_
> _#tiktok *url*_
> _#twitter *url*_
> _#fb *url*_
> _#ytshort *url*_
> _#apk *texto*_
> _#modapk *texto*_
> _#google *texto*_
> _#ytsearch *texto*_
> _#playstore *texto*_
> _#play *texto*_
> _#youtube *texto*_
> _#playlist *texto*_
> _#imagen *texto*_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║       💻 \`𝘾𝙤𝙣𝙛𝙞𝙜 𝙂𝙧𝙪𝙥𝙤𝙨\` 💻
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#add *numero*_
> _#kick *responder*_
> _#kick2 *responder*_
> _#grupo *abrir*_
> _#grupo *cerrar*_
> _#promote *@tag*_
> _#demote *@tag*_
> _#link_
> _#setname *texto*_
> _#setdesc *texto*_
> _#invocar *texto*_
> _#setwelcome *texto*_
> _#setbye *texto*_
> _#hidetag *texto*_
> _#hidetag *audio*_
> _#hidetag *video*_
> _#hidetag *imagen*_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║     🔮 \`𝙍𝙖𝙣𝙙𝙤𝙢\` 🔮
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#inspect *url grupal*_
> _#chatgpt *texto*_
> _#delchatgpt_
> _#dsowner_
> _#join *url grupal*_
> _#consejo_
> _#piropo_
> _#yoayudo *texto*_
> _#reporte *texto*_
> _#s *img*_
> _#sticker *img*_
> _#ocr *img*_
> _#hd *img*_
> _#acortar *url*_
> _#calc_
> _#del_
> _#whatmusic *audio*_
> _#traducir *texto*_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║   👨‍💻 \`𝙎𝙤𝙡𝙤 𝙋𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤𝙨\` 👨‍💻
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#setprefix *prefix*_
> _#resetprefix_
> _#autoadmin_
> _#addowner *@tag*_
> _#delownr *@tag*_
> _#block *@tag*_
> _#unblock *@tag*_
> _#banchat_
> _#unbanchat_
> _#resetuser *@tag*_
> _#banuser *@tag*_
> _#unbanuser *@tag*_
> _#dardiamantes *@tag*_
> _#añadirxp *@tag*_
> _#banuser *@tag*_
> _#restart_
> _#update_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║    😼  \`𝙍𝙥𝙜 / 𝙀𝙘𝙤𝙣𝙤𝙢𝙞𝙖\` 😼
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#cofre_
> _#balance_
> _#levelup_
> _#myns_
> _#perfil_
> _#work_
> _#minar_
> _#buy_
> _#buyall_
> _#verificar_
> _#robar *@tag*_
> _#transfer *@tag*_
> _#unreg_
╰•─────────────────•╯`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌸⸽⃕  𝕯𝖎𝖆𝖇𝖑𝖆 - 𝕭𝖔𝖙 - 𝕸𝕯 🌸⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('⏳');
  } catch {
    conn.reply(m.chat, '😾 *Ocurrió Un Error*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|allmenu|menú|help|menucompleto)$/i;
handler.register = true
export default handler;
