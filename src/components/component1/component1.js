import React from "react";

const Component1 = () => {

    const [active,setActive] = React.useState(false);

    return <div style={{ border: "2px solid red", width: "500px", height: "300px"}}>
        <button onClick={() => setActive(prev => !prev)}>Click</button>
        
        <h1>Test1</h1>
        
        { active && <h1>Test2</h1>}
    </div>
}

export default Component1;