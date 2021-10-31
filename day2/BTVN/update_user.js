const fs = require("fs"); // Khai báo sử dụng thư viện fs của NodeJS

const updateUser = async (id, username, password) => {
  try {
    const stringUsers = await fs.promises.readFile("users.json", {
      encoding: "utf8",
    }); // đọc data từ file json
    // có trường hợp file rỗng sẽ báo lỗi

    const users = JSON.parse(stringUsers); // parse data từ file json sang object
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users[i].username = username;
        users[i].password = password;
      }
    }
    await fs.promises.writeFile("users.json", JSON.stringify(users)); // ghi data từ mảng mới này vào file, đồng thời chuyển đổi lại về dạng JSON
  } catch (err) {
    console.log(err);
  }
};

//xuat module
module.exports = updateUser; // exports ra 1 function
