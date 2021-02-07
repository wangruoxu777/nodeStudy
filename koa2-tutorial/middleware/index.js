const path = require("path");
const bodyParser = require("koa-bodyparser");
const staticFiles = require("koa-static");
const nunjucks = require("koa-nunjucks-2");

const miSend = require("./mi-send");
module.exports = (app) => {
    app.use(staticFiles(path.resolve(__dirname, "../public")));

    app.use(
        nunjucks({
            ext: "html",
            path: path.join(__dirname, "../views"), //指定视图目录
            nunjucksConfig: {
                trimBlocks: true,
            },
        })
    );
        
    app.use(miSend());
    app.use(bodyParser());
};
