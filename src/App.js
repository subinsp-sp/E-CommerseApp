import { Route, Routes } from "react-router-dom";
import Home from "./component/routes/home/home.component";
import Navigation from "./component/routes/home/navigation-component";
import SignIn from "./component/routes/sign-in/sign-in.component";




function Shop(){
  return (
    <h1>Shop</h1>
  )
}

function App() {
 
  return (
   <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    </Route>
   </Routes>
  );
}

export default App;
