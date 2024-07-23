// const Fastify = require("fastify");
// const app = Fastify({
//   logger: false,
// });
// const mssql = require("fastify-mssql");
// const Phone = require("./models/phonemodel");
// const phone_routes = require("./routes/phones");

// // Declare a route
// app.get("/", function (request, reply) {
//   reply.send({ hello: "world" });
// });

// //for making routes
// // async function phone_routes(fastify, options) {
// //   fastify.get("/phones", async (request, reply) => {    //it will fetch all the phones in phones table
// //     try {
// //       const resp = await Phone.findAll();
// //       console.log("resp", resp);
// //       reply.status(200).send({ data: resp });
// //     } catch (error) {
// //       console.log("error", error);
// //     }
// //   });
// // }

// // app.register(phone_routes); //1st way : for registering routes we have to use this
// app.register(phone_routes); //2nd Another way of registering routes

// // Run the server!
// const start = async () => {
//   try {
//     const address = await app.listen({ port: 3000 });
//     console.log(`Server is running on ${address}`);
//   } catch (err) {
//     console.log(`Server is not connected`);
//     process.exit(1);
//   }
// };
// start();

const Fastify = require("fastify");
const app = Fastify({
  logger: false,
});
const phone_routes = require("./routes/phones");
const persons_routes = require("./routes/persons");
const address_routes = require("./routes/address");
const customers_routes = require("./routes/customers");
const orders_routes = require("./routes/orders");
const students_routes = require("./routes/students");
const courses_routes = require("./routes/courses");
const students_courses_routes = require("./routes/student_courses");
const { createClient } = require("redis"); //redis
const Redis = require("ioredis"); //ioredis

// app.register(persons_routes);

app.register((instance, opts, done) => {
  instance.register(phone_routes);
  instance.register(persons_routes);
  instance.register(address_routes);
  instance.register(customers_routes);
  instance.register(orders_routes);
  instance.register(students_routes);
  instance.register(courses_routes);
  instance.register(students_courses_routes);
  done();
});

// Run the server!
const start = async () => {
  try {
    const address = await app.listen({ port: 3000 });
    //redis
    // const client = await createClient()
    //   .on("error", (err) => console.log("Redis Client Error", err))
    //   .connect();
    // await client.set("key", "value");
    // const value = await client.get("key");
    // console.log("value", value);
    // await client.disconnect();

    //ioRedis 
    const redis = new Redis();
    redis.on("connect", () => console.log("Redis Connected"));
    console.log(`Server is running on ${address}`);
  } catch (err) {
    console.log(`Server is not connected`);
    process.exit(1);
  }
};
start();
