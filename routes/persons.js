const Persons = require("../models/persons");

async function persons_routes(fastify, options) {
  fastify.get("/persons", async (request, reply) => {
    try {
      const resp = await Persons.findAll();
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.get("/persons/:id", async (request, reply) => {
    console.log("request", request.params);
    try {
      const resp = await Persons.findOne({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.post("/persons", async (request, reply) => {
    try {
      const resp = await Persons.create(request.body);
      console.log("resp", resp);
      reply.status(200).send(resp.toJSON());
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.patch("/persons/:id", async (request, reply) => {
    try {
      const resp = await Persons.update(request.body, {
        where: { id: request.params.id }, //id
      });
      console.log("resp", resp);
      reply.status(200).send({ data: "updated successfullyx" });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.delete("/persons/:id", async (request, reply) => {
    try {
      const resp = await Persons.destroy({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      console.log("error", error);
    }
  });
}

module.exports = persons_routes;
