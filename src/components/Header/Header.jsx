import { MoonIcon } from 'components/Icons/theme-icons';

export const Header = () => {
  return (
    <header>
      <title>devfinder</title>
      <div>
        <p>DARK</p>
        <button type="button" aria-label="switch theme"></button>
        <MoonIcon />
      </div>
    </header>
  );
};
