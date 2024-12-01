const productResolver = require('./productResolver')
const articleResolvers = require('./articleResolvers')
const orderResolvers = require('./orderResolvers')
const sellerResolvers = require('./sellerResolvers')

module.exports = {
    ...articleResolvers,
    ...orderResolvers,
    ...productResolver,
    ...sellerResolvers
}