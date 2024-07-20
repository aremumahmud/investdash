// AzureTranslate.js
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const key = "9f095f5ba93c4e4da170487c018bad2d";
const endpoint = "https://api.cognitive.microsofttranslator.com";
const location = "eastus";

const translateText = async(text, targetLanguage, from = 'en') => {

    if (!text || !text.trim()) return
        // console.log(text, targetLanguage)
    try {
        const response = await axios({
            baseURL: endpoint,
            url: '/translate',
            method: 'post',
            headers: {
                'Ocp-Apim-Subscription-Key': key,
                'Ocp-Apim-Subscription-Region': location,
                'Content-type': 'application/json',
                'X-ClientTraceId': uuidv4().toString(),
            },
            params: {
                'api-version': '3.0',
                'from': from,
                'to': targetLanguage,
            },
            data: [{ 'text': text }],
            responseType: 'json',
        });
        return response.data[0].translations[0].text;
    } catch (error) {
        // console.error('Error translating text:', error);
        return text;
    }
};

export default translateText;