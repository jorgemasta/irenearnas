import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';

import { ButtonWrapper } from '../../Portfolio/portfolio.style';
import { ActiveStatus } from './contact.style';
import Author from 'common/src/assets/image/portfolio/ireneperfil.jpeg';

const ContactSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  replyWrapper,
  replyTime,
  buttonStyle,
  buttonWrapper,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Trabajemos juntos" />
          <Text
            {...secDescription}
            content="Para escucharte, apoyarte y dotarte de nuevas estrategias que estimulen todo tu potencial, aquí estoy. Así como para resolver cualquier duda que pueda surgir sobre los temas antes expuestos. Actualmente disponemos de muchas facilidades para llevar a cabo las sesiones también de forma online adaptándonos a cada caso particular."
          />
        </Box>
        <Box {...replyWrapper}>
          <ActiveStatus>
            <Image src={Author} alt="Author Avatar" />
          </ActiveStatus>
          <Heading
            as="h4"
            content="Tiempo de respuesta: entre 1-2 días laborales"
            {...replyTime}
          />
        </Box>
        <Box {...buttonWrapper}>
          <ButtonWrapper>
          <a href="mailto:irenearleon@gmail.com">
            <Button
              title="irenearleon@gmail.com"
              className="portfolio_button"
              {...buttonStyle}
            />
          </a>
          </ButtonWrapper>
        </Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  replyWrapper: PropTypes.object,
  replyTime: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonWrapper: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    pt: ['70px', '80px', '100px', '110px', '140px'],
    pb: ['70px', '80px', '100px', '110px', '140px'],
    bg: '#f9f9f9',
  },
  secTitleWrapper: {
    mb: '30px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    mb: '0',
  },
  replyWrapper: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center',
  },
  replyTime: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#302b4e',
    mb: 0,
  },
  buttonStyle: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: '23px',
    pr: '23px',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '50px',
  },
};

export default ContactSection;
