import AppStyled from "./AppStyled";
import RegressiveCounter from "./components/Counter/RegressiveCounter";
import Layout from "./components/Layout/Layout";
import { Counter } from "./store/features/counter/Counter";

const App = (): JSX.Element => {
  return (
    <AppStyled className="main-container">
      <Layout />;
      <RegressiveCounter />
    </AppStyled>
  );
};

export default App;
