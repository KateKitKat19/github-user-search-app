
import { Layout } from './Layout.styled';
import { Header } from './Header/Header';
import { Searchbar } from './Searchbar/Searchbar';
import { UserBlock } from './User/User';

export const App = () => {

  return (
   <Layout>
      <Header />
      <Searchbar />
      <UserBlock />
    </Layout>
  );
};
