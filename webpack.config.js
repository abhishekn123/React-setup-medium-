const path = require("path");
module.exports ={
    entry:"./src/App.js",
    output:{
        filename:"[contenthash].bundle.js",
        path:path.resolve("dist")
    },
    mode:"production"
}