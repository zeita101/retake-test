import axios from "axios";
import { CHAR_API_URL, QUOTE_API_URL } from './Constants';

export async function GetCharAPI() {
    const CharacterAPI = `${QUOTE_API_URL}`;

    const results = await axios.get(CharacterAPI).then(({ data }) => {
        return data;
    });

    return results;
}

export async function GetQuotAPI() {
    const QuoteAPI = `${CHAR_API_URL}`;

    const results = await axios.get(QuoteAPI).then(({ data }) => {
        return data;
    });

    return results;
}