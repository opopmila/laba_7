const { log } = require("console");
const fs = require("fs");

const getUserDB = () => {
	const content = fs.readFileSync("users.json", "utf8");
	const users = JSON.parse(content); //JSON 1) это формат, 2) 
	return users;
};

const postUserDB = (data, id) => {
	if (!data || !id) return "Данных нет";
	else {
		const {name, surname, date, phone, age} = data;  //дестркуторизация
		if(!name || !surname || !date || !phone || !age) return "Данные не указаны";

		const content = fs.readFileSync("users.json", "utf8");
		const users = JSON.parse(content);	
		
		const id = Math.max.apply (
			Math,
			users.map ((e) => e.id),
		)

		const user = {
			id: id == null?0 : id + 1,
			name, //name: name -сокращённое выражение
			surname,
			date,
			phone,
			age,
		};
	
		//console.log ("users", typeof users);
		users.push (user);
		fs.writeFileSync("users.json", JSON.stringify(users));
		return;
	};
};

const deleteUserDB = (id) => {
	const content = fs.readFileSync("users.json", "utf8");
	const users = JSON.parse(content);

	const update = users.filter ((el) => {
		return el.id != id;
	});
	fs.writeFileSync("users.json", JSON.stringify(update));
	return;
};

const putUserDB = (data, id) => {
};

module.exports = { getUserDB, postUserDB, deleteUserDB, putUserDB };
