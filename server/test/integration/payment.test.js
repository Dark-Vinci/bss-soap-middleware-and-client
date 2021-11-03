let server;
const request = require('supertest');

describe ('/payment', () => {
    beforeEach(() => {
        server = require('../../app');
    });

    afterEach( async () => {
        await server.close();
    });

    describe ('/make-payment', () => {
        it ('should return a response of status 200', async () => {
            const response = await request(server).post('/api/payment/make-payment');

            const code = response.body.data.AddPaymentLocalResponse.AddPaymentLocalResult;

            expect(response.status).toBe(200); 
            expect(response.body.message).toBe('success');
            expect(code).toHaveProperty("CorporateCode", "CorpXXXX");   
            expect(code).toHaveProperty("BatchReference", "BATCHTest1100")
        });
    });

    describe('/make-inquiry', () => {
        it ('should return a response of status 200', async () => {
            const response = await request(server).get('/api/payment/make-inquiry');

            const code = response.body.data.GetAccountBalanceResponse.GetAccountBalanceResult;

            expect(response.status).toBe(200); 
            expect(response.body.message).toBe('success');
            expect(code).toHaveProperty("CorporateCode", "CorpXXX");
            expect(code).toHaveProperty("StatusDescription", "SUCCESSFUL");
            expect(code).toHaveProperty("AccountNumber", "00000XXXXX");
            expect(code).toHaveProperty("Balance", "1051.42");
        });
    })
})