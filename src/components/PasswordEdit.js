import React from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import handleSubmit from '../utils/handleSubmit';
import SubmitButton from './Buttons/SubmitButton';

const PasswordEdit = (props) => {
  const oldPassword = useInput('');
  const newPassword = useInput('');
  const confirmNewPassword = useInput('');

  const StyledForm = styled.form`
    .submit-button {
      margin-bottom: 10px;
    }
  `;

  return (
    <StyledForm onSubmit={
      async (evt) => {
        evt.preventDefault();
        if (newPassword.value !== confirmNewPassword.value) {
          alert('new passwords do not match');
        } else {
          try {
            await handleSubmit({
              method: 'put',
              endpoint: `/user/update_password/${props.id}`,
              data: {
                oldPassword: oldPassword.value,
                newPassword: newPassword.value,
              },
              token: props.user.token,
            });
            props.setPasswordEdit(false);
          } catch (err) {
            const { response } = err;
            alert(response.data.message);
          }
        }
      }}>
      <label>
        <input type='password' placeholder='OLD PASSWORD' required {...oldPassword.bind}/>
      </label>
      <label>
        <input type='password' placeholder='NEW PASSWORD' required {...newPassword.bind} />
      </label>
      <label>
        <input type='password' placeholder='CONFIRME NEW PASSWORD' required {...confirmNewPassword.bind} />
      </label>
      <SubmitButton name='CHANGE PASSWORD'/>
      <SubmitButton name='CANCEL' handleClick={() => props.setPasswordEdit(false)} />
    </StyledForm>
  );
};

export default PasswordEdit;
