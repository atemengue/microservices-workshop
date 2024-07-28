
const OrderStatus = Object.freeze({
    Created: 'created',
    Cancelled: 'cancelled',
    AwaitingPayement: 'awaiting:payement',
    Completed: 'completed'
})

module.exports = { OrderStatus }