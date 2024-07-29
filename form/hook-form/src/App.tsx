import './App.css';
import Form from './components/form';
import { Fields, InputType } from './components/form/form.tsx';
import { SubmitHandler } from 'react-hook-form';

export type FormType = {
  title: string;
  inputs: InputType[][];
};

const form: FormType = {
  title: 'Поиск клиента',
  inputs: [
    [
      {
        title: 'ПИНФЛ',
        name: 'pinfl',
        required: true,
      },
      {
        title: 'Серия документа',
        name: 'pseries',
        required: true,
      },
      {
        title: 'Номер документа',
        name: 'pnumbers',
        required: true,
      },
      {
        title: 'Фамилия',
        name: 'surname',
        required: true,
      },
      {
        title: 'Отчество',
        name: 'middleName',
        required: true,
      },
    ],

    [
      {
        title: 'Код клиента',
        name: 'client',
        required: true,
      },
      {
        title: 'Дата рождения',
        name: 'client',
        required: true,
      },
      {
        title: 'Имя',
        name: 'client',
        required: true,
      },
    ],
  ],
};

//55 500 7009

function App() {
  const handleSubmit: SubmitHandler<Fields> = (data) => {
    console.log('mydata', data);
  };

  return (
    <>
      <Form form={form} onSubmit={handleSubmit} />
    </>
  );
}

export default App;
