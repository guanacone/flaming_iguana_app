import React, { useEffect } from 'react';
import UserForm from './UserForm';
import useInput from '../hooks/useInput';
import handleSubmit from '../utils/handleSubmit';

const UserNew = (props) => {
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

  if (data) {
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
              props.setEditing(false);
            } catch (err) {
              const { response } = err;
              alert(response.data.message);
            }
          }
        }
      />
    );
  }
  return (
    <p>loading...</p>
  );
};

export default UserNew;
