import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from 'react-icons-kit';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import SocialProfile from '../SocialProfile';
import BannerWrapper from './banner.style';
import { ButtonWrapper } from '../../Portfolio/portfolio.style';

import { cornerDownRight } from 'react-icons-kit/feather/cornerDownRight';
import PersonImage from 'common/src/assets/image/portfolio/irene.png';
import { marginRight } from 'styled-system';

const BannerSection = ({
  row,
  contentArea,
  imageArea,
  image,
  authorQuoteStyle,
  nameStyle,
  buttonStyle,
  quoteStyle,
  aboutStyle,
  roleStyle,
  roleWrapper,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      portfolioJson {
        SOCIAL_PROFILES {
          icon
          url
        }
      }
    }
  `);

  return (
    <BannerWrapper id="sobre_mi">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row} className='wrapper-banner'>
          <Box {...contentArea}>
{/*             <Heading content="Hola, soy" {...greetingStyle} /> */}
            <Heading content="Irene Arnás" {...nameStyle} />
{/*             <Heading content="Psicóloga clínica" {...designationStyle} /> */}
            <Box {...roleWrapper}>
              <Icon
                icon={cornerDownRight}
                style={{ color: '#3444f1' }}
                size={22}
              />
              <Heading content="Psicóloga sanitaria - P-01333" {...roleStyle} />
            </Box>
            <Text
              content="Psicóloga Sanitaria con 12 años de experiencia en intervención infanto - juvenil y adultos. Sesiones dinámicas y centradas en la persona."
              {...aboutStyle}
            />
            <ButtonWrapper>
              <a href="#contacto">
                <Button
                  title="Haz tu reserva"
                  className="portfolio_button"
                  {...buttonStyle}
                />
              </a>
            </ButtonWrapper>
            <Text
              content={<>
                <p style={{ margin: 0}}>Recupera tu poder,</p>
                <p style={{ margin: 0}}>Sánate a tí mismo,</p>
                <p style={{ margin: 0}}>Ámate a tí mismo,</p>
                <p style={{ margin: 0}}>Conócete a tí mismo.</p>
                <p style={{ margin: 0}}>Porque estos son los senderos hacia tu propia libertad y felicidad.</p>
              </>}
              {...quoteStyle}
            />
            <p style={{
                  fontSize: 20,
                  fontFamily: 'Dancing Script',
                  fontWeight: 400,
                  color: '#fff',
                  fontWeight: 700,
                  textAlign: 'right'
            }}>Cita de Laura Chica</p>
          </Box>
          <Box {...imageArea} className="image_area">
            <Image src={PersonImage} alt="Irene Arnás" {...image}/>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '50%', '40%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '50%', '60%'],
    flexBox: true,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  image : {
    height: '80vh',
  },
  greetingStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
  },
  nameStyle: {
    as: 'h2',
    color: '#fff',
    fontSize: ['38px', '38px', '44px', '60px', '80px'],
    fontWeight: '800',
    mb: '6px',
    fontFamily: 'Dancing Script'
  },
  buttonStyle: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: '23px',
    pr: '23px',
  },
  designationStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '700',
    mb: ['30px', '30px', '25px', '30px', '30px'],
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px',
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#fff',
    mb: '0',
    ml: '10px',
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: '50px',
  },
  quoteStyle: {
    fontSize: ['24px', '24px', '24px', '24px', '24px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mt: '88px',
    fontFamily: 'Dancing Script',
    mb: '4px'
  },
  authorQuoteStyle: {
    fontSize: ['20px'],
    fontFamily: 'Dancing Script',
    fontWeight: '400',
    color: '#fff',
    fontWeight: '700',
    textAlign: 'right'
  }
};

export default BannerSection;
