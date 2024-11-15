import { useState } from 'react';
import './AmbiguousCase.css';

function AmbiguousCase() {
    const [angleA, setA] = useState(0);
    const [sideA, setB] = useState(0);
    const [sideB, setC] = useState(0);
    const [tritype, setTri] = useState("Press Calulate");

    function ambigCase(e) {
        e.preventDefault();

    }

    return (
        <form onSubmit={(e) => ambigcase(e)}>
            <h1 class="header">Ambiguous Case</h1>
            <label>Angle A: </label>
            <input type="number" value={angleA} onChange={(event) => { setA(event.target.value) }} required />
            <label>Side A: </label>
            <input type="number" value={sideA} onChange={(event) => { setB(event.target.value) }} required />
            <label>Side B: </label>
            <input type="number" value={sideB} onChange={(event) => { setC(event.target.value) }} required />
            <label>Triangle Type</label>
            <input type="text" value={tritype} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default AmbiguousCase;