import styled from 'styled-components';

export const SearchbarStyled = styled.form`
  position: relative;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 730px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 45px;
  @media screen and (min-width: 768px) {
    padding-left: 80px;
    height: 69px;
  }
  border-radius: 15px;
  background-color: ${props => props.theme.colors.mainBcg};
  box-shadow: ${props =>
    props.theme.colors.mainBcg === 'var(--light-mode-white)'
      ? '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
      : 'none'};
  border-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.colors.title};
  &::placeholder {
    font-size: 13px;
    line-height: 1.9;
    color: ${props => props.theme.colors.regText};
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.39;
    }
  }
`;

export const SearchBarIcon = styled.div`
  position: absolute;
  top: 18px;
  left: 15px;
  @media screen and (min-width: 768px) {
    top: 23px;
    left: 32px;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 84px;
  height: 46px;

  top: 6px;
  right: 7px;
  color: #fff;
  background-color: ${props => props.theme.colors.linkText};
  border-radius: 10px;
  border-color: transparent;
  outline: none;
  cursor: pointer;
  transition: background-color, 250ms ease-out;
  &:hover,
  &:focus {
    background-color: #60abff;
  }
  @media screen and (min-width: 768px) {
    width: 106px;
    height: 50px;
    top: 10px;
    right: 10px;
  }
`;
