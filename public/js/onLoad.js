document.addEventListener('DOMContentLoaded', async function () {
    await resetPlanCookie();
    loginOnLoad()
        .then(() => updateHistory);
    await updatePromos();
});