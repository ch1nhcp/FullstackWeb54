const fs = require("fs");

const updateUser = async (id, user) => {
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
module.exports = updateUser; // exports ra 1 function
