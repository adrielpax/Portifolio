import {NextApiRequest, NextApiResponse} from 'next';
import {google, GoogleApis} from 'googleapis';

type SheetForm = {
    name:string
    email:string
    message:string
    date:string
}

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    
    if(req.method !== 'POST'){
        return res.status(405).send({message:'Only Post request are allowed'});
    }

    const body = req.body as SheetForm;

    try {
        
        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email:process.env.GOOGLE_API_CLIENT_EMAIL,
                private_key:process.env.GOOGLE_API_CLIENT_KEY?.replace(/\\n/g,'\n')
            },
            scopes:[
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ]
        })

        const sheets = google.sheets({
            auth,
            version:'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId:process.env.GOOGLE_SHEET_ID,
            range:'A1:E1',
            valueInputOption:'USER_ENTERED',
            requestBody:{
                values:[
                    [
                        body.name,
                        body.email,
                        body.message,
                        body.date
                    ]
                ]
            }
        });

        return res.status(200).json({
            data:response.data
        })

    } catch (error) {

        console.log(error)
        return res.status(500).send({message:'Something went wrong in server'})
        
    }

}