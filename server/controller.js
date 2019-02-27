module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, height, mass } = req.body;

    dbInstance
      .create_people([name, height, mass])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: " Something went wrong." });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .read_people([params.id])
      .then(people => res.status(200).send(people))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
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
  }

  //   update: (req, res, next) => {
  //     const dbInstance = req.app.get("db");
  //     const { params, query } = req;

  //     dbInstance
  //       .update_people([params.id, query.desc])
  //       .then(() => res.sendStatus(200))
  //       .catch(err => {
  //         res.status(500).send({ errorMessage: "Something went wrong." });
  //         console.log(err);
  //       });
  //   },

  //   delete: (req, res, next) => {
  //     const dbInstance = req.app.get("db");
  //     const { params } = req;

  //     dbInstance
  //       .delete_people([params.id])
  //       .then(() => res.sendStatus(200))
  //       .catch(err => {
  //         res.status(500).send({ errorMessage: "Something went wrong." });
  //         console.log(err);
  //       });
  //   }
};
