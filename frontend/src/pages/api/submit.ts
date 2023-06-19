import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  message: string;
  date: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only Post request are allowed" });
  }else{
    res.status(200).send({message: "Post Recebido com sucesso"});
  }

  const body = req.body as SheetForm;
  const {GOOGLE_API_CLIENT_EMAIL, GOOGLE_API_CLIENT_KEY, GOOGLE_SHEET_ID} = process.env

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_API_CLIENT_EMAIL,
        private_key: GOOGLE_API_CLIENT_KEY?.replace(/\\n/g, "\n"),
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

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Contact!A2:E2",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [body.name, body.email, body.message, body.date]
        ],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong in server" });
  }
}
