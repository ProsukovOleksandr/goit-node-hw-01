import * as contacts from "./contacts.js";
import yargs from "yargs";
const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const contactsList = await contacts.listContacts();
        console.log(contactsList);
        break;
      case "getById":
        const oneContact = await contacts.getContactById(id);
        console.log(oneContact);
        break;
      case "add":
        const newContact = await contacts.addContact({ name, email, phone });
        console.log(newContact);
        break;
      case "removeById":
        const deletedContact = await contacts.removeContact(id);
        return console.log(deletedContact);
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
