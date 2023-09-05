const mongoose = require('mongoose');
const User = require('../models/user');
const fixtures = require('../fixtures');

const MONGO_URL = 'mongodb://localhost:27017/aroundtheus';

// Write your code
beforeAll(() => {
    mongoose.connect(MONGO_URL);
});
afterAll(() => {
    mongoose.disconnect();
});

describe('Database tests', () => {
    beforeEach(() => {
        User.create(fixtures.user);
    });
    afterEach(() => {
        User.deleteOne(fixtures.user.name)
    });
});

test('test name', () => {

});