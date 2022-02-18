// Use.
import { useAppContext } from './context';
import { Context } from './type';
import { SignIn } from './screen';
import { Layout } from './ui';

const App = () => {
  const { screen } = useAppContext() as Context;

  return <Layout>{screen === 'signin' && <SignIn />}</Layout>;
};

export { App };
