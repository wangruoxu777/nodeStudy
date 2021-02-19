const Koa = require("koa");
const router = require("./router");
const middleware = require("./middleware");

const app = new Koa();
middleware(app);
router(app);
app.listen(3200, () => {
    console.log("服务器在3100端口启动 http://localhost:3200");
});
