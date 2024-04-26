const { expect } = require('chai');
const supertest =  require('supertest');

describe ('GET Object', () => {

    it ('Berhasil GET Object', async () => {
    const response = await supertest('https://reqres.in/api').get('/users/1')
    console.log(response.body)
    expect(response.status).equal(200)

    })

}) 