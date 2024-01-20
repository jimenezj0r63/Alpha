// Importa solo lo que necesitas de React
import PropTypes from 'prop-types';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';

// No necesitas 'React' aquí, puedes eliminarlo

export default function Footer() {
  const copyrightLinks = [
    {
      title: 'Terminos de uso',
      href: '/',
    },
    {
      title: 'Politicas de Privacidad',
      href: '/',
    },
  ];

  const serviceMenu = [
    {
      title: 'Diseño UI/UX ',
      href: '/service/service-details',
    },
    {
      title: 'Desarrollo Web',
      href: '/service/service-details',
    },
    {
      title: 'Marketing Digital ',
      href: '/service/service-details',
    },
    {
      title: 'Desarrollo con React js',
      href: '/service/service-details',
    },
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget logoSrc="ALPHATECH" logoAlt="Logo" text="Bienvenidos a Alphatech." />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contactanos" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2024 Alphatech Agencia.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant="cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}

Footer.propTypes = {
  copyrightText: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  text: PropTypes.string,
};
