import { google } from "googleapis";

type authProps = {
  clientEmail: string | undefined;
  privateKey: string | undefined;
}

export const authenticateGooogle = ({clientEmail,privateKey}:authProps)=>{
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey?.replace(/\\n/g, "\n"),
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheets = google.sheets({
    auth,
    version: "v4",
  });

  return{
    auth,
    sheets
  }
}