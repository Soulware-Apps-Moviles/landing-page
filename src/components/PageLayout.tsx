import {ReactNode} from 'react';

type PageLayoutProps = {
  title: ReactNode;
};

export default function PageLayout({title}: PageLayoutProps) {

  return (
    <div>
        <h1>{title}</h1>
    </div>
  );
}
