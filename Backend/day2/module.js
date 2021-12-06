const fs = require("fs");

const users = [
  { id: 1, username: "a", password: "123456" },
  { id: 2, username: "b", password: "123456" },
  { id: 3, username: "c", password: "123456" },
];

// users => string
fs.writeFile("users.json", JSON.stringify(users), (err) => {
  console.log(err);
});
// nếu file đã có sẵn thì sẽ ghi đè data
// nếu muốn thêm vào file đã có sẵn thì sử dụng writeAppend

// 1 cách khác là flag: "a"
// fs.writeFile("users.json", JSON.stringify(users), { flag: "a" }, (err) => {
//   console.log(err);
// });

// CRUD => file
const addUser = async (user) => {
  try {
    const stringUsers = await fs.promises.readFile("users.json", {
      encoding: "utf8",
    });
    const users = JSON.parse(stringUsers);
    const newUsers = [
      ...users,
      {
        id: user.id,
        ...users,
      },
    ];
    await fs.promises.writeFile("users.json", JSON.stringify(newUsers));
  } catch (err) {
    console.log(err);
  }
};

//chay thu
addUser(4, "d", "1234567");
