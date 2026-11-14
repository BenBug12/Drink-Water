const users = [
    {
        id: 1,
        fullName: 'System Administrator',
        email: 'admin@drinkwater.com',
        password: 'adminpassword123',
        address: 'Water Co. Headquarters',
        role: 'admin'
    }
];

const products = [
    { id: 1, title: 'PureSpring Spring Water', category: 'Spring', volumeSize: '1L Pack (6-pack)', price: 15.99, stockQuantity: 50, image: 'spring-water.png' },
    { id: 2, title: 'Alkaline Mineral Water', category: 'Alkaline', volumeSize: '500ml (12-pack)', price: 19.99, stockQuantity: 30, image: 'alkaline-water.png' },
    { id: 3, title: 'Distilled water', category: 'Distilled', volumeSize: '1 Gallon', price: 5.99, stockQuantity: 100, image: 'distilled-water.png' }
];

let orders = [];
let subscriptions = [];
let deliveries = [];

module.exports = { users, products, orders, subscriptions, deliveries };