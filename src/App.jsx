import Navbar from "./Components/Navbar/Navbar"
import ShoeForm from "./Components/ShoesForm/ShoesFrom"
import ShoesList from "./Components/ShoesList/ShoeList"
import { useState } from "react";

function App() {
  const [shoes, setShoes] = useState([]);
  const addToCart = (shoe) => {
    // Implement your addToCart logic here.
    // This function should add the selected shoe to the cart.
  };
  const handleFormSubmit = (newShoe) => {
    // Update the state with the new shoe data when the form is submitted
    setShoes([...shoes, newShoe]);
  };
  return (
    <>
      <Navbar/>
      <ShoeForm onFormSubmit={handleFormSubmit} />
      <ShoesList shoes={shoes} addToCart={addToCart} />
    </>
  )
}

export default App
