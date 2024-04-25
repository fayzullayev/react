type Image = {
  src: string;
  alt: string;
};

export type Place = {
  id: string;
  title: string;
  image: Image;
  lat: number;
  lon: number;
};
