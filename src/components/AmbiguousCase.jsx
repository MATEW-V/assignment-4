import { useState } from 'react';
import './AmbiguousCase.css';

function AmbiguousCase() {
    const [angleA, setA] = useState(0);
    const [sideA, setB] = useState(0);
    const [sideB, setC] = useState(0);
    const [tritype, setTri] = useState("Press Calulate");



function ambigCase(e){
    e.preventDefault();

}

return(
    <form onSubmit={(e) => ambigcase(e)}>
    <h1 class="header">Heron's Formula</h1>
    <label for="sa">Side A: </label>
    <input type="number" id="sa" name="SideA"></input>
    <label for="sb">Side B: </label>
    <input type="number" id="sb" name="SideB"></input>
    <label for="sc">Side C: </label>
    <input type="number" id="sc" name="SideC"></input>
    <label for="ahf">Area:</label>
    <input type="number" id="ahf" name="areahf" readonly></input>
    <button type="submit" id="chf" class="calculate">Calculate</button>
    </form>
)
}