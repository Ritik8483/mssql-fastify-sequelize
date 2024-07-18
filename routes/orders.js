const Orders = require("../models/orders");
const { appendPayload } = require("../reuseables/appendPayload");

async function orders_routes(fastify, options) {
  fastify.get("/order", async (request, reply) => {
    try {
      const resp = await Orders.findAll();
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.get("/order/:id", async (request, reply) => {
    try {
      const resp = await Orders.findOne({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.post("/order", async (request, reply) => {
    try {
      const payload = appendPayload(request);
      const resp = await Orders.create(payload);
      reply.status(200).send({ data: resp.toJSON() });
    } catch (error) {
      reply.status(400).send({ error: error });
      console.log("error", error);
    }
  });

  fastify.patch("/order/:id", async (request, reply) => {
    try {
      const payload = appendPayload(request);
      const resp = await Orders.update(payload, {
        where: { id: request.params.id }, //id
      });
      reply.status(200).send({ data: "updated successfullyx" });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.delete("/order/:id", async (request, reply) => {
    try {
      const resp = await Orders.destroy({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      console.log("error", error);
    }
  });
}

module.exports = orders_routes;
