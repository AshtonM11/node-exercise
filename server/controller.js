module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, height, mass } = req.body;
    const { residents } = req.body;

    dbInstance
      .create_people([name, height, mass])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: " Something went wrong." });
        console.log(err);
      });
    dbInstance
      .create_planets([residents])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: " Something went wrong." });
        console.log(err);
      });
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_people()
      .then(people => res.status(200).send(people))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
        console.log(err);
      });
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_planets()
      .then(people => res.status(200).send(people))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
        console.log(err);
      });
  }
};
