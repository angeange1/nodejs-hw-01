import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const parsedData = JSON.parse(data);

        if (parsedData.length > 0) {
        parsedData.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(parsedData, undefined, 2), 'utf8');}

    } catch (error) {
    console.error('Error in removing last contact:', error);
  }};

removeLastContact();
