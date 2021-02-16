import React, { useEffect } from 'react';
import styled from 'styled-components';
import UserForm from './UserForm';
import useInput from '../hooks/useInput';
import handleSubmit from '../utils/handleSubmit';
import SubmitButton from './Buttons/SubmitButton';
import { getUser } from '../services/auth';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserNew = (props) => {
  const firstName = useInput('');
  const familyName = useInput('');
  const email = useInput('');
  const biography = useInput('');
  const user = getUser();
  const { data } = props;

  useEffect(() => {
    firstName.setValue(data.firstName);
    familyName.setValue(data.familyName);
    email.setValue(data.email);
    biography.setValue(data.biography);
  }, [data]);

  if (data) {
    return (
      <StyledDiv>
        <UserForm
          firstName={firstName}
          familyName={familyName}
          email={email}
          biography={biography}
          title='SAVE CHANGES'
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
                    biography: biography.value,
                  },
                  token: user.token,
                });
                props.setEditing(false);
              } catch (err) {
                const { response } = err;
                alert(response.data.message);
              }
            }
          }
        />
        <SubmitButton onClick={() => props.setEditing(false)}>CANCEL</SubmitButton>
      </StyledDiv>
    );
  }
  return (
    <p>loading...</p>
  );
};

export default UserNew;
