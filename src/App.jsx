import "./App.css";
import MoonComponent from "./component/describing/final/01_MoonComponent";
import PropsInComponents from "./component/describing/final/02_PropsInComponents";

function App() {
  const isActive = false;
  return (
    <>
      <MoonComponent />
      <PropsInComponents name={"tim"} age={21} />
      {/* we can write comment here like this */}
      {/* Always put curly braces around props value like name= {"time"} */}
      {/* <PropsInComponents isActive =isActive/>  it will throw error*/}
      <PropsInComponents isActive={isActive} />
      {/* above is correct way to write it */}
    </>
  );
}

export default App;
