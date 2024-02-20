document.addEventListener('DOMContentLoaded', async function () {
   // await checkCookieAccess();
    await resetPlanCookie();
    await loginOnLoad();
});

async function checkCookieAccess() {
    if (!await document.hasStorageAccess()) {
        try {
            await document.requestStorageAccess();
        } catch (err) {
            console.error(err);
            return;
        }
    }
}