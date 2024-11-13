import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import SidebarDemo from "./Components/SidebarDemo";

export default function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Landing/>}/>
    </Routes>
      
    </>
  )
}