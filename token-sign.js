const jwt = require('jsonwebtoken');

const secret = 'myCat';

const payload =  {
  sub: 1,
  role: 'customer'
};

function signToken(payload, secret) {
  const token = jwt.sign(payload, secret);
  return token;
};

console.log(signToken(payload, secret));
