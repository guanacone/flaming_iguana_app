import React, { useEffect } from 'react';
// import { navigate } from 'gatsby';
import UserForm from './UserForm';
import useInput from '../hooks/useInput';
// import useFetchAPI from '../hooks/useFetchAPI';
import handleSubmit from '../utils/handleSubmit';
// import { isLoggedIn, getUser } from '../services/auth';

const UserNew = (props) => {
  // const user = getUser();
  // const userID = location.pathname.split('/')[2];
  // const { data, error } = useFetchAPI({ endpoint: `/user/${userID}`, token: user.token });
  const firstName = useInput('');
  const familyName = useInput('');
  const email = useInput('');

  const { data } = props;

  useEffect(() => {
    if (!data) {
      return;
    }
    firstName.setValue(data.firstName);
    familyName.setValue(data.familyName);
    email.setValue(data.email);
  }, [data]);

  const getContent = (dataContent) => {
    if (dataContent) {
      return (
        <UserForm
          firstName={firstName}
          familyName={familyName}
          email={email}
          handleSubmit = {
            async (evt) => {
              evt.preventDefault();
              try {
                await handleSubmit({
                  method: 'put',
                  endpoint: `user/${props.id}`,
                  data: {
                    firstName: firstName.value,
                    familyName: familyName.value,
                    email: email.value,
                  },
                  token: props.user.token,
                });
                props.changeState(!props.editing);
              } catch (err) {
                const { response } = err;
                alert(response.data.message);
              }
            }} />
      );
    }

    return (
      <p>loading...</p>
    );
  };

  return (
    <>
      {getContent(data)}
    </>
  );
};

export default UserNew;
