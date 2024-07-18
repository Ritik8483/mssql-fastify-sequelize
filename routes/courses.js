const Courses = require("../models/courses");
const { appendPayload } = require("../reuseables/appendPayload");

async function courses_routes(fastify, options) {
  fastify.get("/course", async (request, reply) => {
    try {
      const resp = await Courses.findAll();
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.get("/course/:id", async (request, reply) => {
    console.log("request", request.params);
    try {
      const resp = await Courses.findOne({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.post("/course", async (request, reply) => {
    try {
      const payload = appendPayload(request);
      const resp = await Courses.create(payload);
      reply.status(200).send(resp.toJSON());
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.patch("/course/:id", async (request, reply) => {
    try {
      const payload = appendPayload(request);
      const resp = await Courses.update(payload, {
        where: { id: request.params.id }, //id
      });
      reply.status(200).send({ data: "updated successfullyx" });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.delete("/course/:id", async (request, reply) => {
    try {
      const resp = await Courses.destroy({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      console.log("error", error);
    }
  });
}

module.exports = courses_routes;
