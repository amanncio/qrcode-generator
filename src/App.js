import { useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import "./App.css";

function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url, {
      width: 500,
      margin: 3,
    }, function (err, url){
      setQrcodeLink(url);
    } )
  }

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container">
      <div className="box-qrcode">
        <h1>Gerador de QR Code</h1>
        <QRCode 
          value={link}
        />
        <input
          className="input"
          placeholder="Digite seu link..."  
          value={link}
          onChange={ (e) => handleQrcode(e)}    
        />
        <a href={link} target="_blank" rel="noopener noreferrer">Acessar link</a>
        <a href={qrcodeLink} download={`qrcode.png`}>Baixar QR Code</a>
      </div>
    </div>
  );
}

export default App;
