import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const getAllContacts = async () => {
    return fs.readFile(PATH_DB, 'utf8');
};

getAllContacts()
    .then((data) => JSON.parse(data))
    .catch((error) => console.error('Error in getting all contacts:', error));

console.log(await getAllContacts());







//  try {
//         const data = await fs.readFile(PATH_DB, 'utf8');
//         const parsedData = JSON.parse(data);
//         return parsedData;
//     } catch (error) {
//     console.error('Error in adding contact:', error);
//   }
