import md5 from 'md5';

const hashEmail = (email) => {
  const hashedEmail = md5(email
    .trim()
    .toLowerCase());
  return hashedEmail;
};

export default hashEmail;
