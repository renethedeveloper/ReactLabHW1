import { useState } from "react";

const ColorChanger = () => {

 const  [color, setColor] = useState("white")

 const colorArray =["blue","black", "chartreuse","green", "lemonChiffon", "red", "purple", "fuschia"]
 
 const changeColor=()=>{
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    setColor(randomColor)
 }

    return (  
        <div>
            <button onClick={changeColor}>Click to Change Color</button>
            <h1 style={{color}}>Red</h1></div>
    );
}
 
export default ColorChanger;