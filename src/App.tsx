import * as React from 'react';
import { useState } from 'react';

function App() {
    const [value, setValue] = useState('');
    
    return (
        <div className="App">
            <p>
                <strong>See instructions in `README.md`</strong>
            </p>
            
            <label>
                <span className="label-text">Input:</span>
                
                {/*
                Replace this `input` element with a component that implements our
                desired editing behaviour described in the README.md
                */}
                <input type="text" value={value} onChange={(e) => {
                    setValue(e.currentTarget.value);
                }} />
            </label>
            
            <p>
                Value: "{ value }"
            </p>
        </div>
    );
}

export default App;
