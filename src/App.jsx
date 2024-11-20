import { Routes, Route } from "react-router-dom";
import MainLanding from "./Components/MainLanding";
import SidebarDemo from "./Components/SidebarDemo";
import Start from "./Components/Start";

export default function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<MainLanding/>}/>
       <Route path="/start" element={<Start/>}/>
    </Routes>
      
    </>
  )
}