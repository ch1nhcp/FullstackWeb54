const fs = require("fs"); // Khai báo sử dụng thư viện fs của NodeJS

const deleteUser = async (id) => {
  try {
    const stringUsers = await fs.promises.readFile("users.json", {
      encoding: "utf8",
    }); // đọc data từ file json
    // có trường hợp file rỗng sẽ báo lỗi

    const users = JSON.parse(stringUsers); // parse data từ file json sang object

    const newUsers = users.filter((user) => user.id !== id);

    await fs.promises.writeFile("users.json", JSON.stringify(newUsers)); // ghi data từ mảng mới này vào file, đồng thời chuyển đổi lại về dạng JSON
  } catch (err) {
    console.log(err);
  }
};

//xuat module
module.exports = deleteUser; // exports ra 1 function
