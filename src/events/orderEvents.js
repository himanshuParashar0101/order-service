const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Emit Order Placed Event
exports.emitOrderPlaced = (order) => {
  eventEmitter.emit('OrderPlaced', order);
  console.log('Order Placed event emitted');
};

// Event listeners (for Product Service)
eventEmitter.on('OrderPlaced', (order) => {
  // Logic to inform Product service (e.g., REST API call or Queue)
  console.log('Handling OrderPlaced event for order:', order._id);
});
