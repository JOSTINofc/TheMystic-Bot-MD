importar  buscar  desde  'node-fetch' ;
 controlador  const =  async  ( m ,  { conn , usedPrefix ,  usedPrefix : _p , __dirname , text , isPrems } )  =>  {
  intentar  {
  si  ( usedPrefix  ==  'a'  ||  usedPrefix  ==  'A' )  retorno ;

   fecha  constante =  d . toLocaleDateString ( locale ,  { día : 'numérico' ,  mes : 'largo' ,  año : 'numérico' } ) ;
  const  { dinero , joincount }  =  global . base de datos . datos . usuarios [ m . remitente ] ;

 const  rtotalreg  =  Objeto . valores ( global.db.datos.usuarios ) .​​​​​​ filtro ( ( usuario ) => usuario . registrado == verdadero ) . longitud ;    
    const  rtotal  =  Objeto . entradas ( global.db.datos.usuarios ) .​​​​​​ longitud || '0'  
        const  usuarioetiqueta  =  '@'  +  m . remitente . dividir ( '@s.whatsapp.net' ) [ 0 ] ;
  const  { exp , límite , nivel , rol }  =  global . base de datos . datos . usuarios [ m . remitente ] ;
  const  pp  =  esperar  conexión . perfilPictureUrl ( conn.usuario.jid ) .​​​​ captura ( _ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png' ) ;  
  const  fkon  =  {  clave : {  de mí : falso ,  participante : `0@s.whatsapp.net` , ... ( m . chat ? {  remotoJid : `status@broadcast`  } : { } )  } ,  mensaje : {  ' contactMessage' : {  'displayName' : saludo ,  'vcard' : `BEGIN:VCARD\nVERSION:3.0\nN:XL; ${ saludo } ,;;;\nFN: ${ saludo } ,\nitem1.TEL;waid= ${ m . remitente . dividir ( '@' ) [ 0 ] } : ${ m . remitente . split ( '@' ) [ 0 ] } \nitem1.X-ABLabell:Ponsel\nEND:VCARD` ,  'jpegThumbnail' : imagen1 ,  miniatura : imagen1  , sendEphemeral : true } } } ;
    //await conn.reply(m.chat, '*El menú del bot se abrirá rápidamente...*', fkon, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '💜 Ciao' , cuerpo: 'L'amore conquista tutto 💋', sourceUrl: global.yt, miniatura: await (await fetch(pp)).buffer() }}})
//m.react('📍');
  let  txt  = `╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║🌹 \`𝐃𝐢𝐚𝐛𝐥𝐚𝐁𝐨𝐭-𝐌𝐃\` 🌸
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║💋 Ciao ${ taguser } Spero che questo bot ti piaccia
║🚩 *Datos:* ${ fecha }
╚◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║✨ \`𝙄𝙣𝙛𝙤 𝙐𝙨𝙪𝙖𝙧𝙞𝙤\` ✨
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║🚻 \`𝙉𝙄𝙑𝙀𝙇\` ➝ ${ nivel }
║•┄┄┄┄┄┄┄┄┄┄┄•
║💎 \`𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎\` ➝ ${ límite }
║•┄┄┄┄┄┄┄┄┄┄┄•
║💰 \`𝘾𝙊𝙄𝙉𝙎\` ➝ ${ dinero }
║•┄┄┄┄┄┄┄┄┄┄┄•
║⚔️ \`𝙍𝘼𝙉𝙂𝙊\` ➝ ${ rol }
║•┄┄┄┄┄┄┄┄┄┄┄•
║♨️ \`𝙀𝙓𝙋\` ➝ ${ exp }
╚◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝


╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║ 🌻 \`𝙄𝙣𝙛𝙤 𝘽𝙤𝙩\` 🌻
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
║ 🌍 \`𝙏𝙧𝙪𝙚 𝙔 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨\` 🌍
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#verdadero *antiprivado*_
> _#verdadero *restringir*_
> _#verdadero *lectura automática*_
> _#verdadero *antispam*_
> _#verdadero *anticall*_
> _#verdadero *bienvenido*_
> _#verdadero *antilink2*_
> _#verdadero *antienlace*_
> _#verdadero *detectar*_
> _#verdadero *autoadhesivo*_
> _#verdadero *antiviewonce*_
> _#verdadero *antitóxico*_
> _#verdadero *antiárabes*_
> _#verdadero *modoadmin*_
> _#verdadero *antieliminación*_
> _#verdadero *público*_
> _#verdadero *pconly*_
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
> _#lista de reproducción *texto*_
> _#imagen *texto*_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║ 💻 \`𝘾𝙤𝙣𝙛𝙞𝙜 𝙂𝙧𝙪𝙥𝙤𝙨\` 💻
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#añadir *numero*_
> _#patada *respondedor*_
> _#kick2 *respondedor*_
> _#grupo *abrir*_
> _#grupo *cerrar*_
> _#promocionar *@etiqueta*_
> _#degradar *@tag*_
> _#enlace_
> _#setname *texto*_
> _#setdesc *texto*_
> _#invocar *texto*_
> _#setwelcome *texto*_
> _#adiós *texto*_
> _#hidetag *texto*_
> _#ocultar etiqueta *audio*_
> _#ocultar etiqueta *vídeo*_
> _#hidetag *imagen*_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║ 🔮 \`𝙍𝙖𝙣𝙙𝙤𝙢\` 🔮
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#inspeccionar *url grupal*_
> _#chatgpt *texto*_
> _#delchatgpt_
> _#dsowner_
> _#unirse *url grupal*_
> _#consejo_
> _#piropo_
> _#yoayudo *texto*_
> _#reporte *texto*_
> _#s *img*_
> _#pegatina *img*_
> _#ocr *img*_
> _#hd *img*_
> _#acortar *url*_
> _#calc_
> _#del_
> _#quemusica *audio*_
> _#traducir *texto*_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║ 👨‍💻 \`𝙎𝙤𝙡𝙤 𝙋𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤𝙨\` 👨‍💻
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#setprefix *prefijo*_
> _#resetprefix_
> _#autoadmin_
> _#addowner *@etiqueta*_
> _#delownr *@etiqueta*_
> _#bloque *@etiqueta*_
> _#desbloquear *@tag*_
> _#banchat_
> _#desbancar_
> _#resetuser *@tag*_
> _#banuser *@tag*_
> _#unbanuser *@tag*_
> _#dardiamantes *@tag*_
> _#añadirxp *@tag*_
> _#banuser *@tag*_
> _#reiniciar_
> _#actualización_
╰•─────────────────•╯

╔◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╗
║ 😼 \`𝙍𝙥𝙜 / 𝙀𝙘𝙤𝙣𝙤𝙢𝙞𝙖\` 😼
╠◊ ❦*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*✿*:･ﾟࣳࣳࣳࣳࣳࣳࣳࣳࣳࣳﾟ･:*❦ ◊╝
> _#cofre_
> _#saldo_
> _#subir de nivel_
> _#myns_
> _#perfil_
> _#trabajo_
> _#minar_
> _#comprar_
> _#comprartodo_
> _#verificar_
> _#robar *@tag*_
> _#transferencia *@etiqueta*_
> _#desreg_
╰•─────────────────•╯` ;
   espera  conexión . sendMessage ( m . chat ,  { text : txt . trim ( ) ,  menciona : [ ... txt . matchAll ( / @([0-9]{5,16}|0) / g ) ] . map ( ( v )  =>  v [ 1 ]  +  '@s.whatsapp.net' ) , contextInfo  : { forwardingScore : 9999999 , isReenviado  : verdadero , mencionadoJid  : [ ... txt matchAll ( / @ ([0-9]{5, 16}|0) / g ) ] . map ( ( v ) => v [ 1 ] + '@s.whatsapp.net' ) , "externalAdReply" : { "showAdAttribution" : verdadero , "contieneAutoReply" : verdadero , " renderLargerThumbnail" : verdadero , "título" : '🌸⸽⃕ 𝕯𝖎𝖆𝖇𝖑𝖆 - 𝕭𝖔𝖙 - 𝕸𝕯 🌸⸽⃕✰' , "containsAutoReply" : verdadero , "mediaType" : 1 , "miniatura" : imagen6 , "mediaUrl" : global gp1 , "sourceUrl" : global . gp1 } } } , { citado : fkon } ) ;              
 // m.react('⏳');
  }  atrapar  {
    conexión . responder ( m . chat ,  '😾 *Ocurrió Un Error*' ,  m ) ;
  }
} ;
manipulador . ayuda  =  [ 'menú' ] ;
manipulador . etiquetas  =  [ 'menú' ] ;
manipulador . comando  =  / ^(menú|todomenú|menú|ayuda|menucompleto)$ / i ;
manipulador . registro  =  verdadero
exportar  controlador predeterminado  ;
