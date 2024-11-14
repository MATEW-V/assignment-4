import { useState } from 'react';
import './HeronsFormula.css';

function HeronsFormula() {
    const [sideA, setA] = useState(0);
    const [sideB, setB] = useState(0);
    const [sideC, setC] = useState(0);
    const [area, setArea] = useState("Press Calulate");

function herformula(e){
    e.preventDefault();

}

return( 
<form onSubmit={(e) => herformula(e)}>
    <h1 class="header">Heron's Formula</h1>
        <label for="sa">Side A: </label>
        <input type="number" value={sideA} onChange={(event) => { setA(event.target.value) }} required />
        <label for="sb">Side B: </label>
        <input type="number" value={sideB} onChange={(event) => { setB(event.target.value) }} required />
        <label for="sc">Side C: </label>
        <input type="number" value={sideC} onChange={(event) => { setC(event.target.value) }} required />
        <label for="ahf">Area:</label>
        <input type="text" value={area} readOnly />
        <input type="submit" value="Calculate"/>
   </form>
)
}

export default HeronsFormula;