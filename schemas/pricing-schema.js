const {planCollection, ObjectId} = require('../database/db');

async function isPlan(plan) {
    return !!await planCollection.findOne({name: plan});
}

async function getPlan(id) {
    return await planCollection.findOne({_id: new ObjectId(id)});
}

async function getPlanByName(name) {
    return await planCollection.findOne({name: name});
}

async function getPrice(id) {
    let plan = await getPlan(id)
    return plan.price;
}

async function getPlans() {
    return await planCollection.find({}).toArray();
}

module.exports = {
    getPlan,
    getPlans,
    getPrice,
    getPlanByName,
    isPlan
}