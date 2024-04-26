const { expect } = require('chai');
const supertest =  require('supertest');

describe ('DELETE Object', () => {

    it ('Berhasil Delete Object', async () => {
    const response = await supertest('https://reqres.in/api').delete('/users/2')
    console.log(response.body)
    expect(response.status).equal(204)

    })

}) 