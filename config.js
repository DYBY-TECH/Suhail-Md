const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://zorodybytech:mike12&&@cluster0.hgncat7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50948336180";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/8f9a8f46b4a9019b8f357.png" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_55_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDkxLFxuICAgICAgICA2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyLFxuICAgICAgICA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg0LFxuICAgICAgICA4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK3kyeTZ1WkFuS2h0clRNbzd4NGVpck03dWE0cFEwMERtU2RYMWhxY3YvMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUVlVcHFLTVZTWFdFZkxvR2l1Y29RUVwiLFxuICBcInBob25lSWRcIjogXCIzYmRkMmEwMi0xODIxLTRjYWItYWVlNS04N2NiNjNlZGY2N2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTAzLFxuICAgICAgNjgsXG4gICAgICAxNTksXG4gICAgICAyMSxcbiAgICAgIDE5MixcbiAgICAgIDg3LFxuICAgICAgMTM0LFxuICAgICAgMTM1LFxuICAgICAgNTUsXG4gICAgICAyMCxcbiAgICAgIDE4MixcbiAgICAgIDIxNyxcbiAgICAgIDUyLFxuICAgICAgNzAsXG4gICAgICAxODEsXG4gICAgICAxNzMsXG4gICAgICAxNTcsXG4gICAgICA3MSxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICA4OSxcbiAgICAgIDEwNyxcbiAgICAgIDIsXG4gICAgICAzMSxcbiAgICAgIDE0MSxcbiAgICAgIDEyMSxcbiAgICAgIDE4NCxcbiAgICAgIDQzLFxuICAgICAgMjQ1LFxuICAgICAgMjQ0LFxuICAgICAgMjEyLFxuICAgICAgMTUzLFxuICAgICAgMTU1LFxuICAgICAgMjEzLFxuICAgICAgMTIxLFxuICAgICAgNjksXG4gICAgICAyMTMsXG4gICAgICAyNTQsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzSFdWMzk5OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5NDgzMzYxODA6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY3ODQzNzU2NDA4OTY2OjgwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPdzdMZ0ZFSnpGODdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMEJ0Z3IvRUh0UnhWTE9aYWwzcmFWbUIxdW43N2hRbnFIendWU1BrbVNpVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3amRVVG9pYnE5OTlOZEpFUXFaK2ZPK3F6RFBITkZXM2F0Wkd2MW8venN1WkNHT25nbUJidjN0NlVJRFR4MVBWelNFdmlPMWNIWlVJVVF4SmgvcVlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJndzVMOTEwSU5XVHlOY0F3Y0VVQUJvc3FTMFNoZVVXVGRNaEV4aDZwS1RvdThYVWhEY1AyNzROemthZmpmQSt2ZURWVWFIZjVMcG9HN3JaUllPRWpBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0ODMzNjE4MDo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NDYwNTExXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "^",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DYBY-TECH",
  packname: process.env.PACK_NAME || "DYBY-TECH",
  botname : process.env.BOT_NAME  || "DYBY-TECH",
  ownername:process.env.OWNER_NAME|| "DYBY-TECH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-91b8012c-8778-443c-991e-1197dae62bed",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "dyby-00000",
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
