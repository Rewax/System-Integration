import redis from 'ioredis';

// Connect to Redis
const redisClient = new redis();

// Set a value by key
redisClient.set('mykey', 'Hello, Redis!')
  .then(() => {
    console.log('Value set successfully');
  })
  .catch((err) => {
    console.error(err);
  });

// Set multiple values using hmset command
const data = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

redisClient.hmset('myhash', data)
  .then(() => {
    console.log('Hash values set successfully');
    // Get multiple values by keys
    const keys = ['key1', 'key2', 'key3'];
    return redisClient.hmget('myhash', keys);
  })
  .then((reply) => {
    console.log(reply);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    // Close the Redis connection when done
    redisClient.quit();
  });
