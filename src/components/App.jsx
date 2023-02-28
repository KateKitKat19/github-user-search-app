import { Layout } from './Layout.styled';
import { Header } from './Header/Header';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  return (
    <Layout>
      <Header />
      <Searchbar/>
    </Layout>
  );
};
