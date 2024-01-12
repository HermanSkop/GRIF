let pageLimit = 10;
const {getDiscount, removePromo, putPromo, getPromos, isPromo} = require('../schemas/promo-schema');

async function handlePromoCode(promoCode) {
    try {
        if (!await isPromo(promoCode)) throw {message: 'invalid_promo', isNotification: true};
        return await getDiscount(promoCode);
    } catch (err) {
        err.message = 'invalid_promo';
    }
}

async function putPromoCode(user, promo) {
    try {
        if (!user) throw {title: 'not_logged_in', message: 'not_logged_in_text'};
        if (!await hasAdminPermission(user)) throw {title: 'no_permission', message: 'no_permission_text'};
        if (promo.name.length !== 6) throw {title: 'invalid_length', message: 'invalid_length_text'};
    } catch (err) {
        err.isNotification = true;
        throw err;
    }
    return await putPromo(promo);
}

async function deletePromoCode(user, promoId) {
    try {
        if (!user) throw {title: 'not_logged_in', message: 'not_logged_in_text'};
        if (!await hasAdminPermission(user)) throw {title: 'no_permission', message: 'no_permission_text'};
        let deleted = await removePromo(promoId);
        if (deleted.deletedCount === 0 || !deleted.acknowledged) throw new Error('invalid_promo');
    } catch (err) {
        err.isNotification = true;
        throw err;
    }
}

async function hasAdminPermission(user) {
    return user.role === 'admin';
}

async function getPromoCodes(user, page) {
    try {
        if (!user) throw {title: 'not_logged_in', message: 'not_logged_in_text'};
        if (!await hasAdminPermission(user)) throw {title: 'no_permission', message: 'no_permission_text'};
        let promos = await getPromos();
        let pages = Math.ceil(promos.length / pageLimit);
        if (page > pages) page = pages;
        if (page < 1) page = 1;
        return promos.slice((page - 1) * pageLimit, page * pageLimit);
    } catch (err) {
        err.isNotification = true;
        throw err;
    }
}

async function getPagesCount(user) {
    try {
        if (!user) throw {title: 'not_logged_in', message: 'not_logged_in_text'};
        if (!await hasAdminPermission(user)) throw {title: 'no_permission', message: 'no_permission_text'};
        let promos = await getPromos();
        return Math.ceil(promos.length / pageLimit);
    } catch (err) {
        err.isNotification = true;
        throw err;
    }
}

module.exports = {
    handlePromoCode,
    putPromoCode,
    getPromoCodes,
    getPagesCount,
    deletePromoCode
}