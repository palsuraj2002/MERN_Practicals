import "./App.css";
import Functional_compo from "./components/Functional_compo";
import Class_compo from "./components/Class_compo";
import PropsDemo1 from "./components/PropsDemo1";
import PropsDemo2 from "./components/PropsDemo2";

function App() {
  return (
    <>
      <Class_compo />
      <Functional_compo />
      <PropsDemo1 name="Shyam" country="India" />
      <PropsDemo2 name="Roshni" age="19" />
    </>
  );
}

export default App;
