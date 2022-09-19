const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY2MjkxMDUwNn0.bCP2nPWf9q-0rEAhSdCU6DfnYiX9N0jhA_HgFCOsbJk';

function verifyToken(token, secret) {
  const payload = jwt.verify(token, secret);
  return payload;
}

console.log(verifyToken(token, secret));
