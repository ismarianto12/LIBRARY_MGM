import React from "react";
import { Input, Button, Row } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import BottomNavbar from "../components/NavbarBottom";
import { useSpring, animated } from '@react-spring/web';
import {
  Container,
  SearchInput,
  InputGroup,
  StyledInput,
  CloseButton,
  ContactButton,
  Icon
} from '../components/StyledComponent'

const Order = () => {
  const stylesIconAnimated = useSpring({
    from: { transform: 'translateY(-100%)' }, // Dimulai dari luar layar atas
    to: { transform: 'translateY(0)' },      // Bergerak ke posisi awal
    config: { tension: 200, friction: 20 },  // Pengaturan animasi
  });
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

export default Order;
