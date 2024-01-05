const pricingCollection = require('../database/db').pricingCollection;

async function isPlan(plan){
    return !!await pricingCollection.findOne({plan: plan});
}
async function getPrice(plan){
    let pricing = await pricingCollection.findOne({plan: plan})
    return pricing?pricing.price:undefined;
}
async function getPlans(){
    return await pricingCollection.find({}).toArray();
}
module.exports = {
    getPrice,
    getPlans,
    isPlan
}