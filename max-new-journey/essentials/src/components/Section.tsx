import { HTMLProps, ReactNode } from 'react';

type SectionProps = HTMLProps<HTMLTableSectionElement> & {
  title: string;
  children: ReactNode;
};

function Section({ title, children, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
