import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  @media screen and (min-width: 769px) {
    max-width: 730px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.5;
  color: ${props => props.theme.colors.title};
`;

export const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  color: ${props => props.theme.colors.regText};
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
`;
