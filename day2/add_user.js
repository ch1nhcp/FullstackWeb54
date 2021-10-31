const fs = require("fs");

const addUser = async (user) => {
  try {
    const stringUsers = await fs.promises.readFile("users.json", {
      encoding: "utf8",
    }); // đọc data từ file json
    const users = JSON.parse(stringUsers); // parse data từ file json sang object

    const newUsers = [
      ...users,
      {
        id: user.id,
        ...users,
      },
    ]; // tạo mảng mới = mảng cũ + data mới truyền vào

    await fs.promises.writeFile("users.json", JSON.stringify(newUsers)); // ghi data từ mảng mới này vào file, đồng thời chuyển đổi lại về dạng JSON
  } catch (err) {
    console.log(err);
  }
};

//xuat module
module.exports = addUser; // exports ra 1 function
