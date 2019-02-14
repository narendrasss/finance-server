export const config = {
  dbUrl: 'mongodb://admin:admin123@ds121475.mlab.com:21475/finance-db',
  port: process.env.API_PORT || 3001,
  secrets: {
    jwtSecret: process.env.JWT_SECRET || 'narendras',
    jwtExp: '30d',
  },
};