const fs = require("fs");

const readUser = async () => {
  try {
    const stringUsers = await fs.promises.readFile("users.json", {
      encoding: "utf8",
    });
    const users = JSON.parse(stringUsers);
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};

//xuat module
module.exports = readUser; // exports ra 1 function
