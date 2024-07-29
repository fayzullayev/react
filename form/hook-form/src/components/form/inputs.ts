type InputType = {
  title?: string;
  name?: string;
  required?: boolean;
};

type Rows = {
  dimension?: number;
  title?: string;
  name?: string;
  required?: boolean;
  children?: Rows[];
};

export type FormType = {
  title?: string;
  rows?: Rows[];
};

export const form: FormType = {
  title: 'Поиск клиента',
  rows: [
    {
      dimension: 1,
      children: [
        {
          title: 'ПИНФЛ',
          name: 'pinfl',
          required: true,
        },
        {
          children: [
            {
              dimension: 1,
            },
            {
              dimension: 2,
            },
          ],
        },
      ],
    },
    {
      dimension: 1,
      children: [
        {
          title: 'Код клиента',
          name: 'client',
          required: true,
        },
      ],
    },
  ],
};
