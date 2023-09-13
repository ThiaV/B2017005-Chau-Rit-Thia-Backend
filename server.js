const app = require("./app.js");
const config = require("./app/config/index.js");

const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});