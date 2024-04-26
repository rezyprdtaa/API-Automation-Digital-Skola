const { expect } = require('chai');
const supertest =  require('supertest');

describe ('POST Object', () => {

    it ('Berhasil POST Object', async () => {
    const response = await supertest('https://reqres.in/api').post('/users')
    .send({
        "name": "Muhammad Rezy Pradipta",
        "job": "Digital Skola Learner"
    })
    .set('Conten-Type', 'application/json')
    console.log(response.body)
    //expect(response.status).equal(200)

    })

}) 