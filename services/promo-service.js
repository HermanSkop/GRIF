const {getDiscount, removePromo, putPromo} = require('../schemas/promo-schema');
async function handlePromoCode(promoCode) {
    try{
        return await getDiscount(promoCode);
    }
    catch (err) {
        err.message = 'invalid_promo';
    }
}
async function putPromoCode(user, promo){
    try{
        if(!user) throw {title: 'not_logged_in', message: 'not_logged_in_text'};
        if (!await hasPermission(user)) throw {title: 'no_permission', message: 'no_permission_text'};
        if(promo.name.length!==6) throw {title: 'invalid_length', message: 'invalid_length_text'};
    }
    catch (err) {
        err.isNotification = true;
        throw err;
    }
    return await putPromo(promo);
}
async function deletePromoCode(user, promoId) {
    try {
        if(!user) throw {title: 'not_logged_in', message: 'not_logged_in_text'};
        if (!await hasPermission(user)) throw {title: 'no_permission', message: 'no_permission_text'};
        let deleted = await removePromo(promoId);
        if (deleted.deletedCount === 0 || !deleted.acknowledged) throw new Error('invalid_promo');
    }
    catch (err) {
        err.isNotification = true;
        throw err;
    }
}

async function hasPermission(user) {
    return user.role === 'admin';
}

module.exports = {
    handlePromoCode,
    putPromoCode,
    deletePromoCode
}