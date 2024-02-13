// function createPaymentForm(clientSecret) {
//     const elements = stripe.elements();
//     const card = elements.create('card');
//     card.mount('#card-element');
//     const form = document.getElementById('payment-form');
//
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card
//             }
//         }).then(function (result) {
//             if (result.error) {
//                 // Show error to your customer
//                 console.error(result.error.message);
//             } else {
//                 // Payment succeeded, result.paymentIntent contains the payment intent
//                 console.log('Payment succeeded:', result.paymentIntent);
//             }
//         });
//     });
// }