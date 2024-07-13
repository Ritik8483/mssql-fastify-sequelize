const Fastify = require("fastify");
const app = Fastify({
  logger: false,
});
const mssql = require("fastify-mssql");
const Phone = require("./models/phonemodel");

// app.register(mssql, {
//   server: "20.235.76.232",
//   port: 1433,
//   user: "sa",
//   password: "Web@Ligo$$$78",
//   database: "players",
// });

// Declare a route
app.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

//for making routes
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

app.register(phone_routes); //for registering routes we have to use this

// Run the server!
const start = async () => {
  try {
    const address = await app.listen({ port: 3000 });
    console.log(`Server is running on ${address}`);
  } catch (err) {
    console.log(`Server is not connected`);
    process.exit(1);
  }
};
start();
