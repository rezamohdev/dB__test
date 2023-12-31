const mongoose = require('mongoose');
const User = require('../models/user');
const fixtures = require('../fixtures');

const MONGO_URL = 'mongodb://localhost:27017/aroundtheus';

// Write your code
beforeAll(() => {
    return mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
});
afterAll(() => {
    return mongoose.disconnect();
});

describe('Database tests', () => {
    beforeEach(() => {
        const { name, avatar, about, password, email } = fixtures.user;
        User.create({
            name, avatar, about, password, email
        });
    });
    afterEach(() => {
        User.deleteOne({ email: fixtures.user.email })
    });
    it('The user must be complete', () => {
        return User.findOne({ email: fixtures.user.email })
            .then((user) => {
                expect(user).toBeDefined();
                expect(user.email).toBe(fixtures.user.email);
                expect(user.name).toBe(fixtures.user.name);
            });
    });
});

