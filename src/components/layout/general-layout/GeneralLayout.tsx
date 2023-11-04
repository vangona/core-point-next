import React from 'react';
import GeneralFooter from './GeneralFooter';
import GeneralHeader from './GeneralHeader';
import GeneralHero from './GeneralHero';

interface GeneralLayoutInterface {
  children: React.ReactNode;
}
const GeneralLayout = (props: GeneralLayoutInterface) => {
  const { children } = props;
  return (
    <>
      <GeneralHeader />
      <GeneralHero />
      {children}
      <GeneralFooter />
    </>
  );
};

export default GeneralLayout;
