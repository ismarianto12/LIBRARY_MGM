import React from "react";
import { Card, Typography, Divider, Input, Button, Row, Col } from "antd";
import BottomNavbar from "../components/NavbarBottom";
import {
    Container,
    SearchInput,
    InputGroup,
    StyledInput,
    CloseButton,
    ContactButton,
    Icon
} from '../components/StyledComponent'
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Konfirmasi = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <Card
                    style={{
                        maxWidth: "500px",
                        margin: "0 auto",
                        borderRadius: "8px",
                        overflow: "hidden",
                        background:'transparent'
                    }}
                    bordered={false}
                    bodyStyle={{
                        padding: "20px",
                    }}
                >
                    <Title level={4} style={{ textAlign: "center", marginBottom: "20px" }}>
                        Order Confirmation
                    </Title>

                    <Row style={{ marginBottom: "15px" }}>
                        <Col span={12}>
                            <Text strong>Paket:</Text>
                        </Col>
                        <Col span={12} style={{ textAlign: "right" }}>
                            <Text>Internet RoaMAX Haji 30 Hari</Text>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "15px" }}>
                        <Col span={12}>
                            <Text strong>Quota:</Text>
                        </Col>
                        <Col span={12} style={{ textAlign: "right" }}>
                            <Text>17GB</Text>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "15px" }}>
                        <Col span={12}>
                            <Text strong>Validity:</Text>
                        </Col>
                        <Col span={12} style={{ textAlign: "right" }}>
                            <Text>30 Hari</Text>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "15px" }}>
                        <Col span={12}>
                            <Text strong>Nomor:</Text>
                        </Col>
                        <Col span={12} style={{ textAlign: "right" }}>
                            <Text>08110928374</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Text strong>Harga:</Text>
                        </Col>
                        <Col span={12} style={{ textAlign: "right" }}>
                            <Text>Rp 720.000</Text>
                        </Col>
                    </Row>

                    <Divider />

                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={12}>
                            <Title level={5}>Sub Total:</Title>
                        </Col>
                        <Col span={12} style={{ textAlign: "right" }}>
                            <Title level={5}>Rp 720.000</Title>
                        </Col>
                    </Row>

                    <Input
                        placeholder="Enter Promo Code"
                        style={{ marginBottom: "20px", borderRadius: "6px" }}
                    />

                    <Button
                        onClick={() => navigate('/payment')}
                        type="primary"
                        block
                        style={{
                            background: "#52c41a",
                            border: "none",
                            borderRadius: "6px",
                        }}
                    >
                        Pilih Pembayaran
                    </Button>
                </Card>
            </Container>
            <BottomNavbar />
        </>
    );
};

export default Konfirmasi;
