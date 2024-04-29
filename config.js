importar  { watchFile ,  unwatchFile }  desde  'fs' ;
importar  tiza  de  'tiza' ;
importar  { fileURLToPath }  desde  'url' ;
importar  fs  desde  'fs' ; 
importar  cheerio  de  'cheerio' ;
importar  buscar  desde  'node-fetch' ;
importar  axios  desde  'axios' ;
importar  momento  desde  'momento-zona horaria'
importar  {  es  }  desde  "./lib/idiomas/total-idiomas.js"

global . propietario  =  [
 [ '5491168758497' ,  '👑 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 👑' ,  verdadero ] ,
 [ '573012482597' ,  '𝙊𝙬𝙣𝙚𝙧 🧿' ,  verdadero ] ,
 [ '593939005387' ,  '𝙊𝙬𝙣𝙚𝙧 2 🌼' ,  verdadero ] ,
 [ '50558124470' ,  '𝗢𝘄𝗻𝗲𝗿 𝗧𝗮𝗹𝗹𝘆 🍧' ,  verdadero ] ]


global . etiqueta de traje  =  [ '5491168758497' ] ;
global . prems  =  [ '5491168758497' ] ;


global . nombre del paquete  =  '🍁 𝖣𝗂𝖺𝖻𝗅𝖺: 𝖡𝗈𝗍🪷' ;
global . autor  =  '𝐃𝐢𝐚𝐛𝐥𝐚𝐁𝐨𝐭' ;
global . wm  =  '🍁 𝕯𝖎𝖆𝖇𝖑𝖆𝕭𝖔𝖙-𝕸𝕯 🌸' ;
global . sk  =  '🌹 𝐃𝐢𝐚𝐛𝐥𝐚𝐌𝐃 💮' ;
global . titulowm  =  '🍁 𝖣𝗂𝖺𝖻𝗅𝖺 : 𝖡𝗈𝗍🪷' ;
global . titulowm2  =  `𝖣𝗂𝖺𝖻𝗅𝖺 : 𝖡𝗈𝗍 - 𝖬𝖣 ☘️`
global . igfg  =  '𝘋𝘪𝘢𝘣𝘭𝘪𝘵𝘢𝘉𝘰𝘵-𝘔𝘋' ;
global . espera  =  '*⏳ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*' ;
global . frente  a  '1.2.0' ;
global . vsJB  =  '1.0.7' ;

global . lenguajeSK  =  es  //idioma de diablabot

global . imagen1  =  fs . readFileSync ( './Menú2.jpg' ) ;
global . imagen2  =  fs . readFileSync ( './src/nuevobot.jpg' ) ;
global . imagen3  =  fs . readFileSync ( './src/NaufraMD.png' ) ;
global . imagen4  =  fs . readFileSync ( './Menú.png' ) ;
global . imagen5  =  fs . readFileSync ( './src/+18.jpg' ) ;
global . imagen6  =  fs . readFileSync ( './Menu3.png' ) ;
global . imagen7  =  fs . leerFileSync ( './Menu6.jpg' )
global . imagen8  =  fs . leerFileSync ( './Menu4.jpg' )

//editor solo del bot.
global . isdev  =  [ [ "5491168758497" ,  '👑 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 👑' ,  1 ] ]

global . gp1  =  'https://chat.whatsapp.com/DCjR7iTdg5q3Si4TbuwRjR'
global . gp2  =  'https://www.paypal.me/ColaboracionBotOFC'
global . gp3  =  'https://www.instagram.com/naufrazapp?igsh=Y2g1ZXJxbm53eXAy'
global . gp4  =  'https://www.tiktok.com/@naufra.zapp?_t=8kcJigwvtji&_r=1'
global . gp5  =  'https://chat.whatsapp.com/CH6Kc8UEpASLJCVasfZOuC'  //colaboración
global . canal  =  'https://whatsapp.com/channel/0029VaFbERfFnSz5zeyfpi3L'
global . paypal  =  ''
global . yt  =  'https://youtube.com/@Enzito-19'
global . md  =  'https://github.com/EnzoVaselevich/DiablaBot-MD-OFC-'
global . fb  =  'https://www.facebook.com/share/8XyV52kz3sfhrzft/?mibextid=qi2Omg'

//MENSAJES ALEATORIOS:
global . naufraMenus  =  [ imagen1 ,  imagen2 ,  imagen3 ,  imagen4 ,  imagen5 ,  imagen6 ,  imagen7 ,  imagen8 ]
global . naufraRedes  =  [ gp1 ,  gp2 ,  gp3 ,  gp4 ,  canal ,  paypal ,  yt ,  md ,  fb ]


var  ase  =  nueva  fecha ( ) ;  var  hora  =  ase . obtenerHoras ( ) ;  switch ( hora ) {  caso  0 : hora  =  'Linda Mañana' ;  romper ;  caso  1 : hora  =  'Linda Mañana' ;  romper ;  caso  2 : hora  =  'Linda Mañana' ;  romper ;  caso  3 : hora  =  'Linda Mañana' ;  romper ;  caso  4 : hora  =  'linda mañana' ;  romper ;  caso  5 : hora  =  'Linda Mañana' ;  romper ;  caso  6 : hora  =  'Linda Mañana' ;  romper ;  caso  7 : hora  =  'Linda Mañana' ;  romper ;  caso  8 : hora  =  'Linda Mañana' ;  romper ;  caso  9 : hora  =  'Linda Mañana' ;  romper ;  caso  10 : hora  =  'Lindo Día' ;  romper ;  caso  11 : hora  =  'Lindo Día' ;  romper ;  caso  12 : hora  =  'Lindo Día' ;  romper ;  caso  13 : hora  =  'Lindo Día' ;  romper ;  caso  14 : hora  =  'Linda Tarde' ;  romper ;  caso  15 : hora  =  'Linda Tarde' ;  romper ;  caso  16 : hora  =  'Linda Tarde' ;  romper ;  caso  17 :hora  =  'Linda Tarde' ; romper ;  caso  18 : hora  =  'Linda Noche' ;  romper ;  caso  19 : hora  =  'Linda Noche' ;  romper ;  caso  20 : hora  =  'Linda Noche' ;  romper ;  caso  21 : hora  =  'Linda Noche' ;  romper ;  caso  22 : hora  =  'Linda Noche' ;  romper ;  caso  23 : hora  =  'Linda Noche' ;  romper ; }
global . saludo  =  '🌹'  +  hora ;

global . modificaciones  =  [ ] ;

global . d  =  nueva  fecha ( nueva  fecha  +  3600000 ) ;
global . configuración regional  =  'es' ;
global . diámetro  =  d . toLocaleDateString ( locale ,  { día laborable : 'largo' } ) ;
global . fecha  =  d . toLocaleDateString ( 'es' ,  { día : 'numeric' ,  mes : 'numeric' ,  año : 'numeric' } ) ;
global . mes  =  d . toLocaleDateString ( 'es' ,  { mes : 'largo' } ) ;
global . año  =  d . toLocaleDateString ( 'es' ,  { año : 'numeric' } ) ;
global . tiempo  =  d . toLocaleString ( 'en-US' ,  { hora : 'numérica' ,  minuto : 'numérica' ,  segundo : 'numérica' ,  hora12 : verdadero } ) ;


global . wm2  =  ` ${ día }  ${ fecha } \nNaufraBot` ;
global . gt  =  'DiablaBot' ;
global . mysticbot  =  '𝗗𝗜𝗔𝗕𝗟𝗔𝗕𝗢𝗧-𝗠𝗗🌸' ;
global . mysticbot  =  'https://whatsapp.com/channel/0029VaFbERfFnSz5zeyfpi3L' ;
global . espera  =  '*⏳ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*' ;
global . waittt  =  '*⏳ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*' ;
global . waitttt  =  '*⏳ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*' ;
global . nomorown  =  '5491168758497' ;
global . pdoc  =  [ 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ,  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ,  'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ,  'application/vnd. ms-excel' ,  'aplicación/msword' ,  'aplicación/pdf' ,  'texto/rtf' ] ;
global . cmenut  =  '❖––––––『' ;
global . cmenub  =  '┊✦' ;
global . cmenuf  =  '╰━═┅═━––––––๑\n' ;
global . cmenua  =  '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n ' ;
global . dmenut  =  '*❖─┅──┅〈*' ;
global . dmenub  =  '*┊»*' ;
global . dmenub2  =  '*┊*' ;
global . dmenuf  =  '*╰┅────────┅✦*' ;
global . htjava  =  '⫹⫺' ;
global . htki  =  '*⭑•̩̩͙⊱•••• ☪*' ;
global . htka  =  '*☪ ••••̩̩͙⊰•⭑*' ;
global . comienzo  =  '• • ◕◕════' ;
global . fin  =  '════◕◕ • •' ;
global . botdate  =  `*📆 Fecha:*   ${ momento . tz ( 'América/Ciudad_de_México' ) . formato ( 'DD/MM/AA' ) } ` ;
global . bottime  =  `*⏰ Hora:* ${ momento . tz ( 'América/Ciudad_de_México' ) . formato ( 'HH:mm:ss' ) } ` ;
global . fgif  =  { clave : { participante : '0@s.whatsapp.net' } ,  mensaje : { 'videoMessage' : { 'título' : wm ,  'h' : `Hmm` ,  'segundos' : '999999999' ,  ' gifPlayback' : 'true' ,  'caption' : bottime ,  'jpegThumbnail' : fs . readFileSync ( './Menu.png' ) } } } ;
global . multiplicador  =  99 ;
global . flaaa  =  [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=' ,
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=' ,
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=' ,
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=' ,
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=¡Advertencia!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor 3Color=%23f2aa4c&fillColor4Color= %23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color= %23f2aa4c&backgroundColor=%23101820&text=' ,
] ;


const  archivo  =  fileURLToPath ( import.meta.url ) ;​​​​
watchFile ( archivo ,  ( )  =>  {
  unwatchFile ( archivo ) ;
  consola . log ( tiza . redBright ( 'Actualizar \'config.js\'' ) ) ;
  import ( ` ${ archivo } ? actualización = $ { Fecha.ahora ( ) } ` ) ;
} ) ;
