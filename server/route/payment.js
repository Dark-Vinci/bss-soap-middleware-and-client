const express = require('express');
const xml2js = require('xml2js');
const request = require('request');

const xmlFile = require('../xmlFile/file');

const router = express.Router();

// ROUTE HANDLER FOR MAKING A POST REQUEST TO BSS BANK;

/**  
 * @swagger
 * /api/payment/make-payment:
 *    post:
 *      description: Use to make payment with bss service
 *      responses:
 *          '200':
 *             description: A successful response
*/

router.post('/make-payment', (req, res) => {
    const xmlPayment = xmlFile.postRequest

    // send a dummy request
    request({
        url: 'https://bssbank/xml-endpoint/make-payment', // dummy BSS bank post(payment endpoint)
        method: 'POST',
        body: xmlPayment,
        headers: {
            'Context-Type': 'text/xml;charset=uft-8',
            'Accept-Encoding': 'gzip,deflate',
            'Content-length': xmlPayment.length,
            'SOAPAction': 'http://bss-soap-action' //dummy soap action of bss
        }
    }, (error, response, body) => {
        // assuming everything goes right, then error is [FALSY];
        const responseBody = xmlFile.postResponse;

        const parser = new xml2js.Parser({ explicitArray: false, trim: true });

        parser.parseString(responseBody, (err, result) => {
            // response of the route handler
            res.status(200).json({
                status: 200,
                message: 'success',
                data: result,
            });
        })
    })
});


/**  
 * @swagger
 * /api/payment/make-inquiry:
 *    get:
 *      description: Use to get balance of an account
 *      responses:
 *          '200':
 *             description: A successful response
*/

router.get('/make-inquiry', (req, res) => {
    //  corrected GetAccountBalance> to <GetAccountBalance>
    const xmlGet = xmlFile.getRequest;

    // mocked request
    request({
        url: 'https://bssbank/xml-endpint/inquiry', // dummy BSS bank post(payment endpoint)
        method: 'GET',
        body: xmlGet,
        headers: {
            'Context-Type': 'text/xml;charset=uft-8',
            'Accept-Encoding': 'gzip,deflate',
            'Content-length': xmlGet.length,
            'SOAPAction': 'http://bss-soap-action' //dummy soap action of bss
        }
    }, (error, response, body) => {
        // assuming no error occur, so error value would be [FALSY]
        const responseBody = xmlFile.getResponse;

        const parser = new xml2js.Parser({ explicitArray: false, trim: true });

        parser.parseString(responseBody, (err, result) => {
            // response of the route handler
            res.status(200).json({
                status: 200,
                message: 'success',
                data: result,
            });
        })
    })
})

module.exports = router;