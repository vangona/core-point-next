import React from 'react';
import GeneralHeader from './GeneralHeader';
import GeneralHero from './GeneralHero';
import GeneralFooter from './GeneralFooter';

interface GeneralLayoutInterface {
  children: React.ReactNode
}
const GeneralLayout = (props: GeneralLayoutInterface) => {
  const { children } = props
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