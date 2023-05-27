import redis from 'ioredis';

// Create a subscriber instance
const subscriber = new redis();

// Create a publisher instance
const publisher = new redis();



// Subscribe to a channel
subscriber.subscribe('my-channel', (err, count) => {
  if (err) {
    console.error('Error subscribing to channel:', err);
  } else {
    console.log(`Subscribed to ${count} channel(s)`);
  }
});

// Handle incoming messages
subscriber.on('message', (channel, message) => {
  console.log(`Received message from channel '${channel}': ${message}`);
});

// Publish a message to a channel
const message = 'Hello, Redis pub-sub!';
publisher.publish('my-channel', message, (err, count) => {
  if (err) {
    console.error('Error publishing message:', err);
  } else {
    console.log(`Message published to ${count} subscriber(s)`);
  }

  // Close the connections after publishing the message
  subscriber.quit();
  publisher.quit();
});
