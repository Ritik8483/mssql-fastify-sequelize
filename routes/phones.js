const Phone = require("../models/phonemodel");

async function phone_routes(fastify, options) {
  fastify.get("/phones", async (request, reply) => {
    //it will fetch all the phones in phones table
    try {
      const resp = await Phone.findAll();
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.get("/phones/:id", async (request, reply) => {
    console.log("request", request.params);
    try {
      const resp = await Phone.findOne({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.post("/phones", async (request, reply) => {
    try {
      const resp = await Phone.create(request.body);
      console.log("resp", resp);
      reply.status(200).send(resp.toJSON());
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.patch("/phones/:id", async (request, reply) => {
    try {
      const resp = await Phone.update(request.body, {
        where: { id: request.params.id }, //id
      });
      console.log("resp", resp);
      reply.status(200).send({ data: "updated successfullyx" });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.delete("/phones/:id", async (request, reply) => {
    try {
      const resp = await Phone.destroy({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      console.log("error", error);
    }
  });
}

module.exports = phone_routes;
