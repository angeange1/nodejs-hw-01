import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from "node:fs/promises";

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const parsedData = JSON.parse(data);

        const fetchedContact = createFakeContact();
        parsedData.push(fetchedContact);
        await fs.writeFile(PATH_DB, JSON.stringify(parsedData, undefined, 2), 'utf8');

    } catch (error) {
    console.error('Error in adding a contact:', error);
  }
};

addOneContact();
