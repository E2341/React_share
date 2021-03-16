import AppRouter from "./Router/Router";
import AuthContextProvider from './Context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
