const Redis = require("ioredis");
const Phone = require("../models/phonemodel");

async function phone_routes(fastify, options) {
  const redis = new Redis();

  // fastify.get("/phones", async (request, reply) => {
  //   //it will fetch all the phones in phones table
  //   try {
  //     const resp = await Phone.findAll();
  //     console.log("resp", resp);
  //     reply.status(200).send({ data: resp });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // });

  fastify.get("/phones", async (request, reply) => {
    //it will fetch all the phones in phones table
    try {
      const isExists = await redis.exists("products");
      console.log("isExists", isExists); //0 or 1

      //------to many request--------
      const clientIp =
        request.headers["x-forwarded-for"] || request.socket.remoteAddress;
      const requestCount = await redis.incr(`${clientIp}:request_count`);
      const timeRemaining = await redis.ttl("products");
      if (requestCount > 2) {
        return reply.status(429).send({ error: "To many Request" });
      }
      //------to many request--------

      if (isExists) {
        const products = await redis.get("products"); //firstly it doesn't exist
        console.log("products", JSON.parse(products));
        return reply.status(200).send({ data: JSON.parse(products) });
      }
      // const savingInRedis = await redis.set("products", JSON.stringify(resp));    //it reduces api fetching time from 200ms to 9ms
      const resp = await Phone.findAll();
      const savingInRedis = await redis.setex(
        "products",
        10, //value will be saved for 10s
        JSON.stringify(resp) //everything will be saved in string
      );
      console.log("savingInRedis", savingInRedis); //ok
      reply.status(200).send({ data: resp });
    } catch (error) {
      console.log("error", error);
    }
  });

  // fastify.get("/phones/:id", async (request, reply) => {
  //   console.log("request", request.params);
  //   try {
  //     const resp = await Phone.findOne({
  //       where: { id: request.params.id },
  //     });
  //     console.log("resp", resp);
  //     reply.status(200).send({ data: resp });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // });

  fastify.get("/phones/:id", async (request, reply) => {
    const key = `product/${request.params.id}`;
    const isExists = await redis.exists(key);
    try {
      if (isExists) {
        const products = await redis.get(key);
        return reply.status(200).send({ data: JSON.parse(products) });
      }
      const resp = await Phone.findOne({
        where: { id: request.params.id },
      });
      const savingInRedis = await redis.set(key, JSON.stringify(resp));
      // redis.del(key);    //used to delete cached value from the db
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
