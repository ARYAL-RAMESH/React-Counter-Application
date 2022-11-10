import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0)
    return (
   <div>
   <h1>Simple React Counter</h1>
   <h2>{value}</h2>
   <button className="btn" onClick={()=> setValue(value+1)}>Increase</button>
   <button className="btn" onClick={()=> setValue(value-1)}>Decrease</button>
   <button className="btn" onClick={()=> setValue(0)}>Reset</button>
   <button className="btn" onClick={()=> setValue(25)}>25</button>
   <button className="btn" onClick={()=> setValue(50)}>50</button>
   <button className="btn" onClick={()=> setValue(75)}>75</button>
   <button className="btn" onClick={()=> setValue(100)}>100</button>
    </div>
  );
}

export default App;
