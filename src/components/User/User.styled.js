import styled from 'styled-components';

export const UserImage = styled.img`
  display: block;
  border-radius: 50%;
  max-width: 70px;
  @media screen and (min-width: 768px) {
    max-width: 117px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 32px 24px 48px;
  @media screen and (min-width: 768px) {
    max-width: 730px;
    margin-top: 24px;
    padding: 48px;
  }
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.mainBcg};
  border-radius: 15px;
  box-shadow: ${props =>
    props.theme.colors.mainBcg === 'var(--light-mode-white)'
      ? '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
      : 'none'};
`;

export const InformationWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 769px) {
    gap: 37px;
    align-items: flex-start;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
  line-height: 1.5;
  color: ${props => props.theme.colors.title};
`;

export const InfoList = styled.div`
  @media screen and (min-width: 769px) {
    width: 100%;
    display: flex;
  }
`;

export const StyledLoginWrap = styled.div``;

export const Login = styled.p`
  margin: 0;
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  line-height: 1.46;
  color: ${props => props.theme.colors.linkText};
`;

export const Text = styled.p`
  margin: 0;
  margin-top: 6px;
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    margin-left: auto;
  }
  line-height: 1.46;
  color: ${props => props.theme.colors.regText};
`;

export const Bio = styled.div`
  margin: 0;
  margin-top: 24px;
  font-size: ${props => props.theme.colors.small};
  line-height: 1.67;
  color: ${props => props.theme.colors.regText};
  @media screen and (min-width: 769px) {
    width: 480px;
    margin-left: auto;
    margin-top: 0;
    transform: translateY(-36px);
    & > p {
      margin: 0;

      color: inherit;
    }
  }
`;

export const StatsList = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 32px;
  width: 100%;
  font-style: normal;
  padding: 18px 15px;
  @media screen and (min-width: 768px) {
    padding: 15px 32px;
  }
  @media screen and (min-width: 810px) {
    margin-top: 0;
    max-width: 480px;
    margin-left: auto;
  }
  display: flex;
  background-color: ${props => props.theme.colors.background};
  border-radius: 10px;
`;

export const StatsItem = styled.li`
  color: ${props => props.theme.colors.regText};
  font-size: 13px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    flex-basis: calc((100% - (2 * 1.5px)) / 3);
  }
  &:nth-child(2) {
    @media screen and (min-width: 768px) {
      margin-right: 82px;
    }
  }
  &:first-child {
    @media screen and (min-width: 768px) {
      margin-right: 99px;
    }
  }

  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const StatsNumbers = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.stats};
`;

export const AdditInfoList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 24px;
  width: 100%;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0;
  }
  @media screen and (min-width: 810px) {
    margin-top: 37px;
    max-width: 480px;
    margin-left: auto;
  }
  list-style: none;
  font-size: 13px;
  line-height: 1.46;
  color: ${props => props.theme.colors.regText};
`;

export const AdditInfoItem = styled.li`
  display: flex;
  gap: 14px;
  justify-content: flex-start;
  & > a {
    text-decoration: none;
    color: ${props => props.theme.colors.linkText};
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2);
    max-width: 240px;
    &:first-child {
      margin-bottom: 15px;
    }
  }
`;
