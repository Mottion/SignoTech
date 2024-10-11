const bcrypt = require('bcryptjs');
// import bcrypt from 'bcryptjs';
const saltRounds = 10;

export const encrypt = async (password: string): Promise<string> => {
  return await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
      resolve(hash);
    });
  })
}

export const compare = async (password: string, hash: string): Promise<string> => {
  return await new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, function(err, result) {
      resolve(result);
    });
  })
}