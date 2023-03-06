import styled from 'styled-components';

export const Layout = styled.div`
  margin: 0;
  padding: 24px;
  @media screen and (min-width: 768px) {
    padding: 98px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;
