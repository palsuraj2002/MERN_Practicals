import StateDemo from "./components/StateDemo";
import ConditionalDemo from "./components/ConditionalDemo";

function App() {
  return (
    <>
      <StateDemo />
      <hr></hr>
      <ConditionalDemo isLogin={true} />
    </>
  );
}

export default App;
