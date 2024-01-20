import React from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import SectionHeading from '../SectionHeading';

export default function ErrorPage() {
  pageTitle('Error');
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg cs-error_page"
      style={{ backgroundImage: 'url("/images/about_hero_bg.jpeg")' }}
    >
      <Div className="container">
        <SectionHeading
          title="Esta pagina <br/>no esta disponible"
          subtitle="404 Errro"
          btnText="Regresar al inicio"
          btnLink="/"
          variant="cs-style1 text-center"
        />
      </Div>
    </Div>
  );
}
