const orders = require('../data/orders')
const articles = require('../data/articles')

const orderResolvers = {
    // Get orders by seller
    getOrdersBySeller: (root, args) => {
        const { sellerIdentifier } = root; // Destructure from args
        console.log("Extracted sellerIdentifier:", sellerIdentifier); // Log extracted value
        return orders.filter(order => order.sellerIdentifier === sellerIdentifier);
    },
    
    // getOrdersBySeller: ({ sellerIdentifier }) => orders.find(order => order.sellerIdentifier === sellerIdentifier),

    getArticlesByOrder: (_, { orderId }) => {
        const order = orders.find((o) => o.id === orderId);
        if (!order) throw new Error("Order not found");
        return articles.filter((article) => order.articleIds.includes(article.id));
    },

}

module.exports = orderResolvers;