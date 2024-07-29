import { useFormContext } from 'react-hook-form';
import { InputContainer } from './style.ts';
import { Fields, InputType } from '../../form/form.tsx';

type InputProps = InputType;

function Input({ title, required, name }: InputProps) {
  const {
    register,
    formState: { errors, isDirty, dirtyFields },
  } = useFormContext<Fields>();

  return (
    <InputContainer>
      <p>
        <b>{title + ' - ' + isDirty + ' - ' + dirtyFields[name]}</b>
      </p>
      <input
        type="text"
        {...register(name, {
          required: required ? 'kerakli polya' : false,
        })}
      />
      <p>{errors[name]?.message}</p>
    </InputContainer>
  );
}

export default Input;
