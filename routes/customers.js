const Customers = require("../models/customers");
const { appendPayload } = require("../reuseables/appendPayload");

async function customers_routes(fastify, options) {
  fastify.get("/customer", async (request, reply) => {
    try {
      const resp = await Customers.findAll();
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.get("/customer/:id", async (request, reply) => {
    console.log("request", request.params);
    try {
      const resp = await Customers.findOne({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.post("/customer", async (request, reply) => {
    try {
      const payload = appendPayload(request);
      const resp = await Customers.create(payload);
      reply.status(200).send(resp.toJSON());
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.patch("/customer/:id", async (request, reply) => {
    try {
      const payload = appendPayload(request);
      const resp = await Customers.update(payload, {
        where: { id: request.params.id }, //id
      });
      reply.status(200).send({ data: "updated successfullyx" });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.delete("/customer/:id", async (request, reply) => {
    try {
      const resp = await Customers.destroy({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      console.log("error", error);
    }
  });
}

module.exports = customers_routes;
