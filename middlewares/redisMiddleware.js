// import { Redis } from "ioredis";

// export const getCachedData = (key) => async (req, res, next) => {
//   const redis = new Redis();
//   let data = await redis.get(key);
//   if (data) {
//     return res.status(200).send({ data: JSON.parse(data) });
//   } 

//   next();
// };
