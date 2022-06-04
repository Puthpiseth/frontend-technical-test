/* eslint-disable no-unused-vars */
import { SubmitButton } from '../../UIElements/Button/SubmitButton';
import { FormInput, FormInputLayout } from './MessageForm.style';
interface MessageFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SyntheticEvent) => void;
  type: string;
  placeholder: string;
}

const MessageForm = ({ onChange, onSubmit, placeholder, type = 'text' }: MessageFormProps) => {
  return (
    <FormInputLayout onSubmit={onSubmit}>
      <FormInput onChange={onChange} placeholder={placeholder} type={type} required />
      <SubmitButton>Send</SubmitButton>
    </FormInputLayout>
  );
};

export default MessageForm;
