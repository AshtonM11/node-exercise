const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const people_controller = require("./people_controller");
const planets_controller = require("./planets_controller");

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/people", people_controller.getAll);
app.get("/api/people/:id", people_controller.getOne);
// app.put("/api/people/:id", people_controller.update);
// app.delete("/api/people/:id", people_controller.delete);

app.get("/api/planets", planets_controller.getAll);
app.get("/api/planets/:id", planets_controller.getOne);
// app.put("/api/planets/:id", planets_controller.update);
// app.delete("/api/planets/:id", planets_controller.delete);

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
