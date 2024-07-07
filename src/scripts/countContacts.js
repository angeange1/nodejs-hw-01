import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const parsedData = JSON.parse(data);
        return parsedData.length;
    } catch (error) {
    console.error('Error in counting contacts:', error);
  }};

console.log(await countContacts());
