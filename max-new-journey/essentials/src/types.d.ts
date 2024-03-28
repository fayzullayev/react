type CoreConceptType = {
  title: string;
  description: string;
  image: string;
};

type CoreConceptsType = CoreConceptType[];

type ExampleType = {
  title: string;
  description: string;
  code: string;
};

type ExamplesType = {
  [key: string]: ExampleType;
};
