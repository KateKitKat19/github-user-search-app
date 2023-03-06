import { Layout } from './Layout.styled';
import { Header } from './Header/Header';
import { Searchbar } from './Searchbar/Searchbar';
import { UserBlock } from './User/User';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import { selectTheme } from 'redux/selectors';

import Theme from './Theme';

export const App = () => {
  const error = useSelector(selectError);
  console.log('error in App', error);
  const theme = useSelector(selectTheme);

  return (
    <Theme themeValue={theme}>
      <Layout>
        <Header />
        <Searchbar />
        <UserBlock />
      </Layout>
    </Theme>
  );
};
