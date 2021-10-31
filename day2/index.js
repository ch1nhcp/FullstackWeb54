// const tasks = [
//   {
//     id: 1,
//     title: "abc",
//     isDone: true,
//   },
//   {
//     id: 2,
//     title: "abcd",
//     isDone: true,
//   },
//   {
//     id: 3,
//     title: "abce",
//     isDone: false,
//   },
// ];

// const tasksDone = tasks.filter((e) => e.isDone);
// console.log(tasksDone);

// const fs = require("fs");

// fs.readFile("hello.txt", "utf8", (err, data) => {
//   if (err) return console.error(err);
//   console.log(data);
// });

// console.log("2");

// fs.promises
//   .readFile("hello.txt")
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .catch((err) => console.error(err));

// Cách viết promises khác

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout * 1000);
  });
};
wait(3).then(() => console.log("Run this after 3s"));

// Cách viết sử dụng async await

async function readFileSync() {
  //await promises
  try {
    const data = await readFile("hello.txt");
    return data;
  } catch (err) {
    throw err; // reject (err)
  }
}
// kết quả trả về của hàm async là 1 promise

readFileSync()
  .then((data) => console.log(data))
  .then((err) => console.log(err));

// viết 1 hàm trả về 1 promise, chạy sau 10 s sẽ trả lỗi ( Rejected )

const errAfterTenSecond = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Loi");
    }, 10000);
  });
}; 

(async () => {
  try {
    await errAfterTenSecond(); // 10s chay
  } catch (err) {
    console.log(err); // loi
  }
})();
