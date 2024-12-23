import "./App.css";
import MoonComponent from "./component/describing/final/01_MoonComponent";
import PropsInComponents from "./component/describing/final/02_PropsInComponents";
import LayoutOne from "./component/layouts/layoutone/LayoutOne";
import LayoutThree from "./component/layouts/layoutThree/LayoutThree";
import LayoutTwo from "./component/layouts/layoutTwo/LayoutTwo";
import Cards from "./component/sneha/cards";
import ProductPage from "./component/task/ProductPage";

function App() {
  const isActive = false;
  return (
    <>
      {/* <div>
        <Cards name="Sneha" />
      </div> */}
      {/* <LayoutOne />
      <LayoutTwo />
      <MoonComponent />
      <PropsInComponents name={"tim"} age={21} /> */}
      {/* we can write comment here like this */}
      {/* Always put curly braces around props value like name= {"time"} */}
      {/* <PropsInComponents isActive =isActive/>  it will throw
      
       error*/}
      {/* <PropsInComponents isActive={isActive} /> */}
      {/* above is correct way to write it */}
      {/* <LayoutThree /> */}
      <ProductPage />
    </>
  );
}

export default App;
