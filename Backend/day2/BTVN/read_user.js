const fs = require("fs");

const readUser = async (id) => {
  try {
    const stringUsers = await fs.promises.readFile("users.json", {
      encoding: "utf8",
    });
    const users = JSON.parse(stringUsers);
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        console.log(users[i]);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

//xuat module
module.exports = readUser; // exports ra 1 function
