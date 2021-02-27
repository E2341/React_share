import SignUp from "./pages/SignUp"
import Navbar from "./components/Navbar"
import SignIn from "./pages/SignIn"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SignUp /> */}
      <SignIn />
    </div>
  );
}

export default App;
