import * as contacts from "./contacts.js";

const invokeAction = async ({ action, contactid, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const contactsList = await contacts.listContacts();
        console.log(contactsList);
        break;
      case "getById":
        const oneContact = await contacts.getContactById(contactid);
        console.log(oneContact);
        break;
      case "add":
        const newContact = await contacts.addContact({ name, email, phone });
        console.log(newContact);
        break;
      case "removeById":
        const deletedContact = await contacts.removeContact(contactid);
        return console.log(deletedContact);
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

//invokeAction({ action: "list" });
//invokeAction({action: "getById", contactid: "drsAJ4SHPYqZeG-83QTVW" });
//invokeAction({ action: "removeById", contactid: "6-meczLr3BQHeFLoFtaJJ" });
/*invokeAction({
  action: "add",
  name: "Jonh Wick",
  email: "doggy@style.com",
  phone: "(228) 337-1482",
});*/
