const app = new (require("koa"))();
const koa = require("koa-router")();
const json = require("koa-json");
const logger = require("koa-logger");
const { auth } = require("./server/controllers/user");
app.use(require("koa-bodyparser")());
app.use(json());
app.use(logger());
app.use(function*(next) {
  let start = new Date();
  yield next;
  let ms = new Date() - start;
  console.log("%s %s - %s", this.method, this.url, ms);
});
app.on("error", (err, ctx) => {
  console.log("server error", err);
});

koa.use("/auth", auth.routes());
app.use(koa.routes());
app.listen(3100, () => {
  console.log("koa is listerning in 3100 http://localhost:3100");
});

module.exports = app;
