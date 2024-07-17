const Address = require("../models/address");

async function address_routes(fastify, options) {
  fastify.get("/address", async (request, reply) => {
    try {
      const resp = await Address.findAll();
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.get("/address/:id", async (request, reply) => {
    console.log("request", request.params);
    try {
      const resp = await Address.findOne({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.post("/address", async (request, reply) => {
    try {
      const resp = await Address.create(request.body);
      console.log("resp", resp);
      reply.status(200).send(resp.toJSON());
    } catch (error) {
      console.log("error", error);
      reply.status(400).send({ error: error });
    }
  });

  fastify.patch("/address/:id", async (request, reply) => {
    try {
      const resp = await Address.update(request.body, {
        where: { id: request.params.id }, //id
      });
      console.log("resp", resp);
      reply.status(200).send({ data: "updated successfullyx" });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.delete("/address/:id", async (request, reply) => {
    try {
      const resp = await Address.destroy({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      console.log("error", error);
    }
  });
}

module.exports = address_routes;
