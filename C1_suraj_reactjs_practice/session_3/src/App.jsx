import "./App.css";
import FetchSinglePost from "./components/FetchSinglePost";
import FetchMultiplePost from "./components/FetchMultiplePost";
import Object_useState from "./components/object_useState";
import Array_useState from "./components/Array_useState";
import Form_handling from "./components/Form_handling";
import UseEffectdemo from "./components/UseEffectdemo";
import UseReducerdemo from "./components/UseReducerdemo";

function App() {
  return (
    <>
      <Object_useState />
      <hr />
      <Array_useState />
      <hr />
      <Form_handling />
      <hr />
      <UseEffectdemo />
      <hr />
      <FetchMultiplePost />
      <hr />
      <FetchSinglePost />
      <hr />
      <UseReducerdemo />
    </>
  );
}

export default App;
