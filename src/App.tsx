import AppStyled from "./AppStyled";
import RegressiveCounter from "./components/Counter/RegressiveCounter";
import Layout from "./components/Layout/Layout";

const App = (): JSX.Element => {
  return (
    <AppStyled className="main-container">
      <Layout />;
      <RegressiveCounter />
    </AppStyled>
  );
};

export default App;
