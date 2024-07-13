async function phone_routes(fastify, options) {
    fastify.get("/phones", async (request, reply) => {    //it will fetch all the phones in phones table
      try {
        const resp = await Phone.findAll();
        console.log("resp", resp);
        reply.status(200).send({ data: resp });
      } catch (error) {
        console.log("error", error);
      }
    });
  }