const Students = require("../models/students");
const { appendPayload } = require("../reuseables/appendPayload");

async function students_routes(fastify, options) {
  fastify.get("/student", async (request, reply) => {
    try {
      const resp = await Students.findAll();
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.get("/student/:id", async (request, reply) => {
    console.log("request", request.params);
    try {
      const resp = await Students.findOne({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.post("/student", async (request, reply) => {
    try {
      const payload = appendPayload(request);
      const resp = await Students.create(payload);
      reply.status(200).send(resp.toJSON());
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.patch("/student/:id", async (request, reply) => {
    try {
      const payload = appendPayload(request);
      const resp = await Students.update(payload, {
        where: { id: request.params.id }, //id
      });
      reply.status(200).send({ data: "updated successfullyx" });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.delete("/student/:id", async (request, reply) => {
    try {
      const resp = await Students.destroy({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      console.log("error", error);
    }
  });
}

module.exports = students_routes;
