import styled from 'styled-components';

export const UserImage = styled.img`
  display: block;
  border-radius: 50%;
  max-width: 70px;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 32px 24px 48px;
  @media screen and (min-width: 769px) {
    max-width: 730px;
  }
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.mainBcg};
  border-radius: 15px;
`;

export const InformationWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.colors.title};
`;

export const InfoList = styled.div``;

export const Login = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.46;
  color: ${props => props.theme.colors.linkText};
`;

export const Text = styled.p`
  margin: 0;
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.46;
  color: ${props => props.theme.colors.regText};
`;

export const Bio = styled.p`
  margin: 0;
  margin-top: 24px;
  font-size: ${props => props.theme.colors.small};
  line-height: 1.67;
  color: ${props => props.theme.colors.regText};
`;

export const StatsList = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 32px;
  width: 100%;
  font-style: normal;
  padding: 32px 10px;
  display: flex;
  background-color: #141d2f;
  border-radius: 10px;
`;

export const StatsItem = styled.li`
  color: ${props => props.theme.colors.regText};
  font-size: 13px;
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - (2 * 1.5px)) / 3);
  align-items: center;
`;

export const StatsNumbers = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
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
  list-style: none;
  font-size: 13px;
  line-height: 1.46;
  color: ${props => props.theme.colors.regText};
`;

export const AdditInfoItem = styled.li`
  display: flex;
  gap: 14px;
  justify-content: center;
  & > a {
    text-decoration: none;
  }
`;
