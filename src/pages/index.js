import React from 'react';
import useFetchAPI from '../hooks/useFetchAPI';

const Home = () => {
  console.log(`app name: ${process.env.HEROKU_APP_NAME}`);
  const { data, error } = useFetchAPI({ url: '' });
  const getContent = (dataContent, errorContent) => {
    if (errorContent) {
      return (
        <p>{errorContent.message}</p>
      );
    }

    if (dataContent) {
      return (
        <p>{dataContent.msg}</p>
      );
    }
    return (
      <p>loading...</p>
    );
  };

  return (
    <div>
      <h1>Message:{getContent(data, error)}</h1>
      <p>An app by: Gilles Rusca</p>
    </div>
  );
};

export default Home;
