// ///////////////////////////////////////////////////////////////
// const redis = require("redis");
import redis from 'redis';
import jsonify from 'redis-jsonify';
// let jsonify = require('redis-jsonify');
let client = redis.createClient({ host: '13.209.69.195' });
client.on('error', function (error) {
    console.error(error);
});

// Fuck jsonify
// client = jsonify(client);

// DB function ---------------------------->>
// const util = require('util');
import util from 'util';
const dbset = util.promisify(client.set).bind(client);
const dbget = util.promisify(client.get).bind(client);
const dbhset = util.promisify(client.hset).bind(client);
const dbhget = util.promisify(client.hget).bind(client);

// DB function ----------------------------<<

// module.exports = {
//     dbset,
//     dbget
// };

export { dbset, dbget, dbhset, dbhget };
// ///////////////////////////////////////////////////////////////
