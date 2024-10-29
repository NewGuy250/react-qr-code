import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Update the QR Code URL when word, size, or bgColor changes
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  // Update the word state with the temporary input when generating QR code
  const handleClick = () => {
    setWord(temp);
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="gen">
          <input
            type="text"
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter text to encode"
          />
          <button className="button" onClick={handleClick}>
            Generate
          </button>
        </div>

        <div className="extra">
          <h5>Background Color:</h5>
          <input
            type="color"
            onChange={(e) => setBgColor(e.target.value.substring(1))}
          />

          <h5>Dimension:</h5>
          <input
            type="range"
            min="200"
            max="600"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="output-box">
        <img src={qrCode} alt="Generated QR Code" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}

export default App;
