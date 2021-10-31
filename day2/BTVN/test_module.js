const addUser = require("./add_user"); // local module : goi module ra de su dung
const readUser = require("./read_user");
const readAllUser = require("./read_all_user");
const deleteUser = require("./delete_user");
const updateUser = require("./update_user");

addUser(10, "ew", "0111111");
readUser(5);
readAllUser();
deleteUser(2);
updateUser(6, "sixxxx", "88888888");
