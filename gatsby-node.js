const axios = require('axios');

const { NODE_ENV } = process.env;
const url = NODE_ENV === 'production' ? 'https://gentle-ravine-79398.herokuapp.com' : 'http://localhost:1337';

exports.createPages = async ({ actions: { createPage } }) => {
  const response = await axios.get(`${url}/api/user`);
  const users = response.data;
  createPage({
    path: '/users',
    component: require.resolve('./src/templates/all-users.js'),
    context: { users },
  });
};
