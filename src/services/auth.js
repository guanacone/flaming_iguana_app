import Axios from 'axios';
import isBrowser from '../utils/isBrowser';
import url from '../utils/url';

export const getUser = () => {
  const user = isBrowser() && window.localStorage.getItem('gatsbyUser');
  return user ? JSON.parse(user) : {};
};

const setUser = (tokens) => window.localStorage.setItem('gatsbyUser', JSON.stringify(tokens));

export const handleLogin = async ({ email, password }) => {
  try {
    const { data } = await Axios({
      method: 'post',
      url: `${url}/user/login`,
      data: { email, password } });
    setUser({
      token: data.accessToken,
      refreshToken: data.refreshToken,
    });
  } catch (err) {
    console.log(err);
  }
};

export const handleRefreshToken = async () => {
  try {
    const user = getUser();
    const { data } = await Axios({
      method: 'post',
      url: `${url}/user/refresh`,
      headers: { Authorization: `Bearer ${user.refreshToken}` } });
    setUser({
      token: data.accessToken,
      refreshToken: user.refreshToken,
    });
  } catch (err) {
    console.log(err);
  }
};

export const isLoggedIn = () => {
  const user = getUser();

  return !!user.token;
};

export const logout = async () => {
  try {
    const user = getUser();
    await Axios({
      method: 'post',
      url: `${url}/user/logout`,
      headers: { Authorization: `Bearer ${user.refreshToken}` } });
    setUser({});
  } catch (err) {
    console.log(err);
  }
};
