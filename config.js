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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348106149503";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_08_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU4LFxuICAgICAgICA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExLFxuICAgICAgICAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICA4MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMzLFxuICAgICAgICA1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNpR0VSV0thb0VvSXR1RWZpcnlOcDBkSmNza2hGYTc1M0xTZGVBVVl2Ykk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRoZ1BCcEdLVEJTZGRsekFsNUtGVmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDg2Njk0ZGItZTE0MC00YjE1LWEzZGItNjY4MmIxMjE1MDdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDEyOCxcbiAgICAgIDE2NixcbiAgICAgIDEzNyxcbiAgICAgIDc1LFxuICAgICAgMjU1LFxuICAgICAgMjM1LFxuICAgICAgMTg4LFxuICAgICAgMTE3LFxuICAgICAgOTcsXG4gICAgICAxMzEsXG4gICAgICAyMjIsXG4gICAgICAxMTcsXG4gICAgICAxMTUsXG4gICAgICAxMSxcbiAgICAgIDIyLFxuICAgICAgMTEwLFxuICAgICAgMjYsXG4gICAgICAyMSxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgNjksXG4gICAgICA3OSxcbiAgICAgIDEyNSxcbiAgICAgIDE5NSxcbiAgICAgIDEyMSxcbiAgICAgIDk3LFxuICAgICAgNTIsXG4gICAgICAxODQsXG4gICAgICAxMzEsXG4gICAgICAzNyxcbiAgICAgIDk1LFxuICAgICAgMTYzLFxuICAgICAgMjA5LFxuICAgICAgMTQ5LFxuICAgICAgMTAsXG4gICAgICAxMjAsXG4gICAgICAxOTAsXG4gICAgICA0MCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNDR1Q0WU0yXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA2MTQ5NTAzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJtaWvCo1wiLFxuICAgIFwibGlkXCI6IFwiMTYxMzk2MzQ4MjE1NDQ2OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWp2djZrR0VQV0xzclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0QVkrbVF0a01SSTdTM085QTQ3cUNCTWl2dGZYWHppZW5La2NmTUg1dERFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktUdDRERXZ4bUxPYjRidVduWG1SR3hjcnBGc0gwd09NVkpaVVVCLzZ0dGRBOHRsRWwzbzJvSmpwanB6VjdBdGlLbEErTkVwVzF2WTV6RGkvaVdNb0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkI1cy83aW1uOWVjbmVTb0Z3UVpLM0ZGSmowN1FHdW55YlJjRUgyc1pab3VkVnBVMVdVTk5Rcm9BOWI3U1pMU3o1ZlFBQXhJazlhODRObmhLYlRqMGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDYxNDk1MDM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU4MjUyMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
