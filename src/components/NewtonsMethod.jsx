import { useState } from 'react';
import './NewtonsMethod.css';

function newtonsMethod() {
    const [guess, setA] = useState(0);
    const [root, setRoot] = useState("Press Calulate");

function newtMeth(e){
    e.preventDefault();

}

return(
    <form onSubmit={(e) => newtMeth(e)}>
    <h1 class="header">Newton's Method</h1>
    <label>Guess: </label>
    <input type="number" value={guess} onChange={(event) => { setA(event.target.value) }} required />
    <label>Root Approximation: </label>
    <input type="text" value={root} readOnly />
    <input type="submit" value="Calculate"/>
    </form>
)
}

export default newtonsMethod;