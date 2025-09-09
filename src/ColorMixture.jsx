import { useState } from "react"

export default function ColorMixture(){

    const [r,setR]=useState(0);
    const [g,setG]=useState(0);
    const [b,setB]=useState(0);

    const rgbToHex = (r, g, b) => {
        return (
          "#" +
          [r, g, b]
            .map((x) => {
              const hex = x.toString(16);
              return hex.length === 1 ? "0" + hex : hex;
            })
            .join("")
        );
    };

    const hexColor = rgbToHex(r, g, b);

    const handleCopy = () => {
        navigator.clipboard.writeText(hexColor).then(() => {
          alert(`Copied ${hexColor} to clipboard!`);
        });
    };

    return(
        <div className="color-mixture-page">
            <div className="container">
                <div className="color-mixture-content-wrapper">
                    <h1>Color Mixture</h1>
                    <br/><br/>
                    <div className="color-box" style={{backgroundColor:'rgb('+r+','+g+','+b+')'}}></div>
                    <br/><br/>
                    <label htmlFor="">Red: </label>
                    <input type="range" value={r} min={0} max={255} onChange={(e)=>setR(e.target.value)} />
                    <br/><br/>
                    <label htmlFor="">Green: </label>
                    <input type="range" value={g} min={0} max={255} onChange={(e)=>setG(e.target.value)} />
                    <br/><br/>
                    <label htmlFor="">Blue: </label>
                    <input type="range" value={b} min={0} max={255} onChange={(e)=>setB(e.target.value)} />
                    <br/><br/>
                    <input type="text" disabled value={hexColor} style={{ padding: "8px", fontSize: "16px", marginRight: "8px", textAlign: "center" }} />
                    <button onClick={handleCopy} style={{ padding: "8px 12px", fontSize: "16px", cursor: "pointer", borderRadius: "6px" }}>Copy</button>
                </div>
            </div>
        </div>
    )
}