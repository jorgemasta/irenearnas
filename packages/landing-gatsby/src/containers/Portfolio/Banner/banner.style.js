import styled from 'styled-components';

const BannerWrapper = styled.section`
  position: relative;
  background-color: #647f86;
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .wrapper-banner {
    @media (max-width: 767px) {
      flex-direction: column-reverse;
    }
  }

  .image_area {
    img {
      object-fit: cover;
    }
    @media (max-width: 767px) {
      justify-content: center;
      margin-top: 24px;
      margin-bottom: -24px;
      img {
        height: 50vh;
      }
    }
  }
`;

export default BannerWrapper;
