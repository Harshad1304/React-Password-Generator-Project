import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [len, setLen] = useState(7);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordgen = useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+={}[]";

    for (let i = 0; i < len; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [len, numAllowed, charAllowed, setPassword]);

    const copyRef = useRef(null)
    const handleCopyInput = ()=>{
      navigator.clipboard.writeText(password);
      copyRef.current.select();
    }

  return (
    <>
      <h1 className="text-black text-4xl text-center pt-20 -mb-20">Password Generator</h1>

      <div className="flex w-full h-screen justify-center pt-48 bg-slate-500]">
        <div className=" flex-col bg-slate-800 w-full h-[50%] p-12 mx-20 rounded-2xl shadow-2xl shadow-black flex  items-center ">
          <div>
          <input
            value={password}
            className="border-2 mb-3 p-8 text-2xl border-black h-20 mt-10 rounded-lg w-96"
            type="text"
            ref={copyRef}
            readOnly            
          />
          <button onClick={handleCopyInput} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">Copy</button>
          </div>
          <div>
            <input 
            type="range"
            min={6}
            max={20}
            value={len}
            onChange={(e)=>{setLen(e.target.value)}}
            id="range"
            className=" cursor-pointer"
             />
             <label htmlFor="range" className="text-white text-2xl font-serif font-bold ml-5">Lenght:-({len})</label>
          </div>
          <div>
            <input type="checkbox" name="char" id="char" value={charAllowed} onChange={()=>[setCharAllowed((prev)=>!prev)]} />
            <label htmlFor="char" className="text-white text-2xl font-serif font-bold ml-5">Characters</label>
          </div>
          <div>
            <input type="checkbox" name="num" id="num" value={charAllowed} onChange={()=>[setNumAllowed((prev)=>!prev)]} />
            <label htmlFor="num" className="text-white text-2xl font-serif font-bold ml-5">Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
