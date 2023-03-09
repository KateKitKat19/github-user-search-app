import { ThemeProvider } from 'styled-components';

const lightTheme = {
  colors: {
    background: 'var(--light-mode-lightgrey)',
    mainBcg: 'var(--light-mode-white)',
    regText: 'var(--light-mode-dark-blue)',
    linkText: 'var(--light-mode-blue)',
    title: 'var(--light-mode-title-color)',
    stats: 'var(--light-mode-dark)',
  },
  fonts: ['Space Mono', 'Roboto'],
  fontSizes: {
    small: '15px',
    medium: '22px',
    large: '26px',
  },
};

const darkTheme = {
  colors: {
    background: 'var(--dark-mode-dark)',
    mainBcg: 'var(--dark-mode-main-blue)',
    regText: 'var(--dark-mode-white)',
    linkText: 'var(--dark-mode-blue)',
    title: 'var(--dark-mode-white)',
    stats: 'var(--dark-mode-white)'
  },
  fonts: ['Space Mono', 'Roboto'],
  fontSizes: {
    small: '15px',
    medium: '22px',
    large: '26px',
  },
};

const Theme = ({ children, themeValue }) => (
  <ThemeProvider theme={themeValue === 'light' ? lightTheme : darkTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;
