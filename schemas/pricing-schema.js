const pricingCollection = require('../database/db').pricingCollection;

async function getPrice(plan){
    let pricing = await pricingCollection.findOne({plan: plan})
    return pricing.price;
}
async function getPlans(){
    return await pricingCollection.find({}).toArray();
}
module.exports = {
    getPrice,
    getPlans
}