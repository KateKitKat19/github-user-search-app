import { MoonIcon, SunIcon } from 'components/Icons/ThemeIcons';
import { selectTheme } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from 'redux/themeSlice';
import {
  StyledHeader,
  StyledTitle,
  Container,
  StyledText,
  ToggleButton,
} from './Header.styled';

export const Header = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  function changeTheme() {
    dispatch(toggleTheme());
  }

  const oppositeText = theme === 'light' ? 'dark' : 'light';
  const iconForBtn = theme === 'light' ? <MoonIcon /> : <SunIcon />;

  return (
    <StyledHeader>
      <StyledTitle>devfinder</StyledTitle>
      <Container>
        <StyledText>{oppositeText.toUpperCase()}</StyledText>
        <ToggleButton
          type="button"
          aria-label="switch theme"
          onClick={changeTheme}
        >
          {iconForBtn}
        </ToggleButton>
      </Container>
    </StyledHeader>
  );
};
