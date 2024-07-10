import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Form1 } from "./pages/Form1";
import { Form2 } from "./pages/Form2";
import { Form3 } from "./pages/Form3";

export const Router =() => {
    
    return (

    <BrowserRouter>

      <Routes>

         <Route path='/' element={<Form1/>} />
         <Route path='/page2' element={<Form2 />} />
         <Route path='/page3' element={<Form3 />} />

      </Routes>

    </BrowserRouter>

    )

}