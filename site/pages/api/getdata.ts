import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  message: string;
  business: string;
  number: number;
  date: Date;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET request are allowed" });
  } else {
    res.status(200).send({ message: "GET Recebido com sucesso" });
  }

  const { GOOGLE_API_CLIENT_EMAIL, GOOGLE_API_CLIENT_KEY, GOOGLE_SHEET_ID } =
    process.env;

  try {
    const authClient = new google.auth.GoogleAuth({
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

    const request = {
      spreadsheetId: GOOGLE_SHEET_ID,
      ranges: "Contact!A2:F2",
      valueRenderOption: "USER_ENTERED",
      auth: authClient,
    };

    const sheets = google.sheets({
      auth: authClient,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: request.spreadsheetId,
      range: request.ranges,
    });

    console.log(response.data.values);

    const data = JSON.stringify(response, null, 6);

    console.log(data);

    return res.status(200).send({ data: response.data.values });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong in server" });
  }
}
