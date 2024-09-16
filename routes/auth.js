const Persons = require("../models/persons");

async function persons_routes(fastify, options) {
  fastify.post("/signup", async (request, reply) => {
    try {
      const resp = await Persons.create(request.body);
      console.log("resp", resp);
      reply.status(200).send(resp.toJSON());
    } catch (error) {
      console.log("error", error);
    }
  });
}

module.exports = persons_routes;
