let server;
const request = require('supertest');

describe ('/notFound', () => {
    beforeEach(() => {
        server = require('../../app');
    });

    afterEach( async () => {
        await server.close();
    });

    describe ('/404-handler', () => {
        it ('should return a response of status 404', async () => {
            const response = await request(server).post('/api');

            expect(response.status).toBe(404);
            expect(response.body.message).toBe('failure')
        });

        it ('should return a response of status 404', async () => {
            const response = await request(server).get('/the');

            expect(response.status).toBe(404);
            expect(response.body.message).toBe('failure')
        });

        it ('should return a response of status 404', async () => {
            const response = await request(server).delete('/delete');

            expect(response.status).toBe(404);
            expect(response.body.message).toBe('failure')
        });

        it ('should return a response of status 404', async () => {
            const response = await request(server).put('/yet');

            expect(response.status).toBe(404);
            expect(response.body.message).toBe('failure')
        });
    });

})