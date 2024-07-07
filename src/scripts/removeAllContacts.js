import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf8');

    } catch (error) {
        console.error('Error in removing all contacts:', error);}
};

removeAllContacts();
