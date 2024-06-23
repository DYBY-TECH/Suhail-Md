const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50934331199";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "50934331199";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_30_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUyLFxuICAgICAgICA2NyxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTczLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MixcbiAgICAgICAgMTAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVkkwalJZWk53UWp1K3h0VFBvdlRBWmdTMFpMem9RaHR3WnN0Qmp6Um9odz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYlp4UUxIRm9RbHV2Sl8ybW5LVE05UVwiLFxuICBcInBob25lSWRcIjogXCJjZjllNjdkZS0zZWNmLTQzNWEtYjAzZi0xNzA2YWZmNDQwY2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAxNzIsXG4gICAgICAxODQsXG4gICAgICA1MyxcbiAgICAgIDYxLFxuICAgICAgMjE0LFxuICAgICAgNzIsXG4gICAgICA1NyxcbiAgICAgIDExNCxcbiAgICAgIDEwOCxcbiAgICAgIDE3MCxcbiAgICAgIDIxNCxcbiAgICAgIDM4LFxuICAgICAgMjM4LFxuICAgICAgODYsXG4gICAgICAyMjUsXG4gICAgICAyMDAsXG4gICAgICAzMyxcbiAgICAgIDcsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAyMjAsXG4gICAgICA5MCxcbiAgICAgIDc5LFxuICAgICAgNjcsXG4gICAgICAyMDAsXG4gICAgICAxMTQsXG4gICAgICAyNTEsXG4gICAgICA3MyxcbiAgICAgIDE3MyxcbiAgICAgIDQsXG4gICAgICAxMzYsXG4gICAgICAxMzYsXG4gICAgICAxOTEsXG4gICAgICA3LFxuICAgICAgMjE5LFxuICAgICAgNzQsXG4gICAgICA5MSxcbiAgICAgIDI0MyxcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVCRlNRUFFKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzNzg3MjczNDozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRvbWludXMgZG9wZSBib3kgaHVzYmFuZCDDmEcgZ2lybFwiLFxuICAgIFwibGlkXCI6IFwiMTc0ODIyODg1NzE2MTQwOjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t6V3FlSUhFS3p3emJNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYmc4cTN3OHEydDAxRHhTQmFNeWo4cnZuaTZVTmVISFRmamd5NjZqTE5sOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRTmN1V1F5ZS9GbWVwZjc5bEJVZVY5VUpmZFVXR3ZvMHNqU2Q5NHBQdmtFL2ZkRFU4bk5SNGZGOE9VY2pHNjFUTmU5V0RjcU9LWEdRN09zV2FHR0pCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFYVIxMUMrcFJXWTRKS21XeEtxU09QKzdzU0Z1czFsSXBGR29CUzNpbVFRR1paMXE2QW5oSkVBc3FqL2I5Qk5OME9PdmUwblhKMkd0aWUxaGtNK3NBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzNzg3MjczNDozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODg0MzQ0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUsxVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzFULmpzb24iOiAie1wia2V5RGF0YVwiOlwidkN4bEx3MEJ6Qi82Qm5aVmhwYm9nYWJURXZGSmp5SDBMSDZmUGxyODhPdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDg1MjUxODg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg4NDMzMzMxMTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANFAN",
  ownername:process.env.OWNER_NAME|| "DYBY-TECH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "Public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
