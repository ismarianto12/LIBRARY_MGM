import React from "react";
import styled from "styled-components";
import { Input, Button, Row } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import BottomNavbar from "../components/NavbarBottom";

// Styled components
const Container = styled.div`
  margin: 0 auto;
  overflow: hidden !important;
  padding: 20px;
  background: linear-gradient(to bottom, #f0f0f0, #e6f7ff);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

const SearchInput = styled(Input)`
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 8px 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled(Input.Group)`
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled(Input)`
  border: none;
  outline: none;
  border-radius: 20px 0 0 20px;
  padding: 8px 12px;
  flex: 1;
`;

const CloseButton = styled(Button)`
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

const ContactButton = styled(Button)`
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Profile = () => {
    return (
        <>
            <Container>
                <Row>
                    <SearchInput
                        placeholder="Search Country"
                        prefix={<SearchOutlined />}
                    />


                    <InputGroup>
                        <StyledInput
                            placeholder="Nomor HP atau Nama Kontak"
                            defaultValue="08110928374"
                        />
                        {/* Tombol Close */}
                        <CloseButton icon={<CloseOutlined />} />
                        <ContactButton>
                            <Icon
                                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                                alt="contact icon"
                            />
                        </ContactButton>
                    </InputGroup>
                    <InputGroup style={{ 'marginTop': '10px' }}>
                        <StyledInput
                            placeholder="Nomor HP atau Nama Kontak"
                            defaultValue="08110928374"
                        />
                        {/* Tombol Close */}
                        <CloseButton icon={<CloseOutlined />} />
                        <ContactButton>
                            <Icon
                                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                                alt="contact icon"
                            />
                        </ContactButton>
                    </InputGroup>

                </Row>

                <BottomNavbar />
            </Container>
        </>
    );
};

export default Profile;
