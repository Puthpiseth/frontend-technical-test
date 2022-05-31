/* eslint-disable no-unused-vars */
import React from 'react';
import { FormInput, FormInputContainer } from './MessageForm.style';
import { SendMessageIcon } from './SendMessageIcon';

interface MessageFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  placeholder: string;
  type: string;
}

const MessageForm = ({ onChange, placeholder, value = '', type = 'text' }: MessageFormProps) => {
  return (
    <FormInputContainer>
      <FormInput value={value} onChange={onChange} placeholder={placeholder} type={type} required />
      <SendMessageIcon />
    </FormInputContainer>
  );
};

export default MessageForm;
