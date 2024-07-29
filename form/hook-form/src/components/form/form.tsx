import { Column, FormContainer, FormWrapper, InputsWrapper } from './style.ts';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/input';
import { FormType } from '../../App.tsx';

export type Fields = {
  [key: string]: string | boolean | number;
};

export type InputType = {
  title: string;
  name: string;
  required?: boolean;
};

type FormProps = {
  form: FormType;
  onSubmit: SubmitHandler<Fields>;
};

function Form({ form, onSubmit }: FormProps) {
  const methods = useForm<Fields>();
  const { handleSubmit } = methods;

  console.log(form.inputs.length);

  return (
    <FormContainer>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <h2>{form.title}</h2>
            <InputsWrapper>
              {form.inputs.map((input, index) => (
                <Column>{index + 1}</Column>
              ))}
            </InputsWrapper>
          </FormWrapper>
          <div>
            <br />
            <input type="submit" />
          </div>
        </form>
      </FormProvider>
    </FormContainer>
  );
}

export default Form;
