const fs = require("fs");

const deleteUser = async (id) => {
  try {
    const stringUsers = await fs.promises.readFile("users.json", {
      encoding: "utf-8",
    });
    const users = JSON.parse(stringUsers);
    const updateUser = users.filter((item) => item.id !== id);
    console.log("Delete User successfully!");
  } catch (error) {
    console.log(error);
  }
};

//xuat module
module.exports = deleteUser; // exports ra 1 function
