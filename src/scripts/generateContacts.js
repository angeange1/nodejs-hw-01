import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const parsedData = JSON.parse(data);

        for (let i = 0; i < number; i+=1) {
        const fetchedContacts = createFakeContact();
        parsedData.push(fetchedContacts);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(parsedData, undefined, 2), 'utf8');
    } catch (error) {
    console.error('Error in generating contacts:', error);
  }
};

generateContacts(5);
