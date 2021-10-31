const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

app.set("app", process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("app"), () => {
  console.log(`Server on port ${app.get("app")}`);
});
