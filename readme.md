# GRIF

![COVER](public/images/main.jpg)

## Overview

This version of project is developed to fulfill the requirements of the __tin__ __back__ assignment.
The project will evolve in complete web application to correspond final specifications - __tin__ __project__.

## Navigation

Below you can find requirements for the current version of project and references to the implementations. 

## Table of Contents

- [a)](#A)
- [b)](#B)
- [c)](#C)
- [d)](#D)
- [e)](#E)

### A
>An app that serves static resources (HTML+CSS, optionally some images) located on the server (2 points)

Current version of project uses pug view engine instead of native HTML. 

Examples that must fulfill the requirements:
- [index.pug](views/index.pug) - Pug view
- [main.css](public/css/main.css) - CSS stylesheet related to the view
- [index.js](routes/index.js) - route that serves the view

### B

> An app that accepts the form data from either a static HTML site or a templated one and serves back the data in a 
nicely formatted way (use templates to put the data from the form into the HTML) (2 points)

Form is located in [index.pug](views/index.pug) view. The data from it is received by __/reserve__ path located in
[index.js](routes/index.js) route, where it is redirected for [treatment](#C). Depending on success or failure, the 
request body is edited and sent back to the client.

![img.png](public/images/sample-images/img.png)

The page is sent from [app.js](app.js) file as an error page. It is temporary solution to fulfill the [requirements](#C).,
that will be replaced by frontend validation and backend error response.

![img_1.png](public/images/sample-images/img_1.png)![img_2.png](public/images/sample-images/img_2.png)
### C

>Point b) extended with server-side validation of the entered data. All the fields should have
some validation, and it has to be non-trivial. Analogous to the frontend tasks, the validation
rules need to make sense. Either success or failure should be served to the user accordingly
(success page with filled-in template/failure page with an error message).

The validation is done in [requestHandler.js](models/requestHandler.js) file. All the fields are checked for emptiness 
and their specific requirements. Then data is written to Excel table, handling related to it issues(That is also temporary
solution, later SQL db will be introduced). Finally, responding with the result that was specified [above](#B).

### D

>An extension of point c), this time the data being sent to server has to be modified in a non
trivial way. For instance, we can accept a name of a file and return a rendered page with the
file with the given filename if it exists on the server, otherwise return an error.

The functionality fulfilling the requirements is implemented for a tariff selection. Data gathered
in the same [route](routes/index.js) under __/promo__ path. The data is sent to [promoHandler.js](models/promoHandler.js)
for validation. Promo code is checked for existence in the database and if it is valid, the promo is sent back along with
discount. Preliminarily, the promo code and discount are saved in session. Pug view is rendered with the data.

I decided not to return error if the promo code is invalid, as the functionality will be replaced by frontend validation
and error response. Yet, the initial page is sent back as it is. 


![img_3.png](public/images/sample-images/img_3.png)

### E

>An extension of any of the previous tasks, but using middlewares. For example cookie-parser
(probably the simplest), internationalisation (i18n library), or authorisation+authentication
(many different options, probably the hardest).


The middleware chosen is [i18n](https://www.npmjs.com/package/i18n-express). The page is rendered in two languages: english
for obvious reasons and russian, as it is the only language I can provide the proper translation for. Yet, the page is 
rendered in english by default or russian if it is specified in the request header. UI choice is not implemented and 
will be done in the future. 

Corresponding files to the specification:
- [app.js](app.js) - middleware initialization
- [en.json](locales/en.json) - english translation
- [ru.json](locales/ru.json) - russian translation
- [index.pug](views/index.pug) - view using middleware