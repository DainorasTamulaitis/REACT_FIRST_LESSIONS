import { useState } from "react";


function ZooCreate() {

    const [inputs, setInputs] = useState ({
        name: '',
        type: '',
        weight: 0,
        born: ''
    })
    
    const formControl = (e, what) => {
        const inputsCopy = {...inputs};
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }

    return (
        <div className="zoo__create">
            <input type="text" value={inputs.name} onChange={(e) => formControl(e, 'name')}/>
            <input type="text" value={inputs.type} onChange={(e) => formControl(e, 'type')}/>
            <input type="text" value={inputs.weight} onChange={(e) => formControl(e, 'weight')}/>
            <input type="text" value={inputs.born} onChange={(e) => formControl(e, 'born')}/>
        </div>
    )
}

export default ZooCreate;