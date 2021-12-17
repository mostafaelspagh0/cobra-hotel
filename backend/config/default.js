module.exports = {
  'database_config': {
    'type': 'mongodb',
    'host': 'localhost',
    'port': 27017,
    'username':'',
    'password':'',
    'name': 'test'
  },
  'jwt_config':{ expiresIn: 360000, algorithm: 'HS384' },
  "jwtSecret":"Secret Secret",
};