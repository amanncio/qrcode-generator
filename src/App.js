import { useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import { GlobalStyle } from "./Components/GlobalStyle.styles";
import { Container, Box, Inputs, Links, Title } from "./Components/App.styles";

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
    <Container>
      <GlobalStyle />
      <Box>
        <Title>Gerador de QR Code</Title>
        <QRCode 
          value={link}
        />
        <Inputs
          placeholder="Digite seu link..."
          value={link}
          onChange={ (e) => handleQrcode(e)}
        />
        <Links href={link} target="_blank">Acessar Link</Links>
        <Links href={qrcodeLink} download={`qrcode.png`}>Baixar QR Code</Links>
      </Box>
    </Container>
  );
}

export default App;
