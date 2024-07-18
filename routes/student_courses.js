const StudentCourse = require("../models/student_course");
const { appendPayload } = require("../reuseables/appendPayload");

async function students_courses_routes(fastify, options) {
  fastify.get("/student_course", async (request, reply) => {
    try {
      const resp = await StudentCourse.findAll();
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.get("/student_course/:id", async (request, reply) => {
    console.log("request", request.params);
    try {
      const resp = await StudentCourse.findOne({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.post("/student_course", async (request, reply) => {
    try {
      const payload = appendPayload(request);
      const resp = await StudentCourse.create(payload);
      reply.status(200).send(resp.toJSON());
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.patch("/student_course/:id", async (request, reply) => {
    try {
      const payload = appendPayload(request);
      const resp = await StudentCourse.update(payload, {
        where: { id: request.params.id }, //id
      });
      reply.status(200).send({ data: "updated successfullyx" });
    } catch (error) {
      console.log("error", error);
    }
  });

  fastify.delete("/student_course/:id", async (request, reply) => {
    try {
      const resp = await StudentCourse.destroy({
        where: { id: request.params.id },
      });
      console.log("resp", resp);
      reply.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      console.log("error", error);
    }
  });
}

module.exports = students_courses_routes;
