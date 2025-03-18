import React from "react";
import { Card, Typography, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import {
  Container,
  SearchInput,
  InputGroup,
  StyledInput,
  CloseButton,
  ContactButton,
  Icon
} from '../components/StyledComponent'
import BottomNavbar from "../components/NavbarBottom";
const { Title, Text } = Typography;

const PaymentSuccess = () => {
  return (
    <Container
      style={{
        background: "linear-gradient(120deg, #e0f7fa, #fce4ec)",
      }}>

      <Space direction="vertical" size="large" align="center">
        <CheckCircleOutlined
          style={{
            fontSize: "64px",
            color: "#52c41a",
          }}
        />
        <Title level={4} style={{ color: "#52c41a", margin: 0 }}>
          Peminjaman Buku Success
        </Title>
        <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#52c41a" }}>
          
        </Text>
      </Space>

      <BottomNavbar />
    </Container>
  );
};

export default PaymentSuccess;
