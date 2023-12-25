const express = require("express"); //библиотека
const path = require("path");
const logger = require("morgan");
const routeIndex = require("./route/index");
const port = 3000;
// const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routeIndex); //подключение /api (путь)

// error handler / ввывод ошибок
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	// render the error page
	console.log("🚀 ~ file: app.js:23 ~ app.use ~ err:", err);
	res.status(err.status || 500);
	res.send(err);
});
//отслеживает наш порт
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
