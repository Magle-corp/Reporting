// Use.
import { useAppContext } from './context';
import { Context } from './type';
import { Navbar } from './component';
import { Layout } from './ui';

const App = () => {
  const { screen } = useAppContext() as Context;

  return (
    <Layout>
      <Navbar />
      {screen.component}
    </Layout>
  );
};

export { App };
