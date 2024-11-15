import { useState } from 'react';
import './PolynomialFunction.css';

function PolynomialFunction() {
    const [coEff, setA] = useState(0);
    const [exp, setB] = useState(0);
    const [xVal, setC] = useState(0);
    const [dispFunc, setFunc] = useState("Press Calulate");
    const [evalFunc, setEval] = useState("Press Calulate");

function polyFunc(e){
    e.preventDefault();

}

return( 
<form onSubmit={(e) => herformula(e)}>
    <h1 class="header">Heron's Formula</h1>
        <label for="sa">Co-efficents: </label>
        <input type="number" value={coEff} onChange={(event) => { setA(event.target.value) }} required />
        <label for="sb">Exponents: </label>
        <input type="number" value={exp} onChange={(event) => { setB(event.target.value) }} required />
        <label for="sc">X value: </label>
        <input type="number" value={xVal} onChange={(event) => { setC(event.target.value) }} required />
        <label for="ahf">Polynomial Function: </label>
        <input type="text" value={dispFunc} readOnly />
        <label for="ahf">Polynomial Evaluation: </label>
        <input type="text" value={evalFunc} readOnly />
        <input type="submit" value="Calculate"/>
   </form>
)
}

export default PolynomialFunction;