// ///////////////////////////////////////////////////////////////
// const redis = require("redis");
import redis from 'redis';
import jsonify from 'redis-jsonify';
// let jsonify = require('redis-jsonify');
let client = redis.createClient({ host: '3.34.156.16' });
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
const dbhexi = util.promisify(client.hexists).bind(client);
const dbhgetall = util.promisify(client.hgetall).bind(client);
const dbrpush = util.promisify(client.rpush).bind(client);
const dblpush = util.promisify(client.rpush).bind(client);
const dblrem = util.promisify(client.lrem).bind(client);
const dblrange = util.promisify(client.lrange).bind(client);
const dbllen = util.promisify(client.llen).bind(client);

// DB function ----------------------------<<

// module.exports = {
//     dbset,
//     dbget
// };

export { dbset, dbget, dbhset, dbhget, dbhexi, dbhgetall, dbrpush, dblpush, dblrem, dblrange, dbllen };
// ///////////////////////////////////////////////////////////////
