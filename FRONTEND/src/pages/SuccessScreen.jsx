import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components

const HeaderTitle = styled.div`
    top: 0;
    position: absolute;
    text-align: center;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0 auto;
  max-width:420px !important;
  height: 100vh;
  background: linear-gradient(to bottom, #000000, #004d00, #003399);
`;

const Card = styled.div` 
  border-radius: 10px;
  padding: 20px 30px;
  width: 350px;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  color: ${(props) => (props.green ? "#00FF00" : "white")};
  font-weight: bold;
  margin: ${(props) => (props.margin ? "0 0 10px 0" : "10px 0")};
`;

const SubText = styled.p`
  color: #bfbfbf;
  margin: 5px 0 20px 0;
`;

const DataSection = styled.div`
  margin: 20px 0;
  text-align: left;
`;

const DataField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-size: 12px;
  color: #bfbfbf;
`;

const Value = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: white;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #00ff00;
  border: none;
  color: black;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #00cc00;
  }
`;

const SuccessScreen = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <HeaderTitle>

        <Title>Thank You</Title>
        <Title green margin>
          Congratulation
        </Title>
        <SubText>you are our partner now</SubText>
      </HeaderTitle>
      <Card>

        <DataSection>
          <Title level={5} margin>
            YOUR DATA TO LOGIN
          </Title>

          <DataField>
            <Label>USER LOGIN</Label>
            <Value>hello@reallygreatsite.com</Value>
          </DataField>
          <DataField>
            <Label>PASSWORD</Label>
            <Value>Suksesmulia</Value>
          </DataField>
          <DataField>
            <Label>REFF-CODE</Label>
            <Value>DPI02401</Value>
          </DataField>
        </DataSection>

        <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
      </Card>
    </Container>
  );
};

export default SuccessScreen;
