const fs = require("fs"); // Khai báo sử dụng thư viện fs của NodeJS

const addUser = async (id, username, password) => {
  try {
    const stringUsers = await fs.promises.readFile("users.json", {
      encoding: "utf8",
    }); // đọc data từ file json
    // có trường hợp file rỗng sẽ báo lỗi

    console.log(stringUsers);
    console.log("===============================");

    const users = JSON.parse(stringUsers); // parse data từ file json sang object
    console.log(users);
    console.log("===============================");

    const newUsers = [
      ...users,
      {
        id: id,
        username: username,
        password: password,
      },
    ]; // tạo mảng mới = mảng cũ + data mới truyền vào
    console.log(newUsers);

    await fs.promises.writeFile("users.json", JSON.stringify(newUsers)); // ghi data từ mảng mới này vào file, đồng thời chuyển đổi lại về dạng JSON
  } catch (err) {
    console.log(err);
  }
};

//xuat module
module.exports = addUser; // exports ra 1 function
