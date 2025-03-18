import React from 'react';
import { Form, Input, Button, Checkbox, Card, Row, Col, Select, Typography } from 'antd';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const SignupScreen = () => {

    const stylesIconAnimated = useSpring({
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
    });
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        const { email, name, phonenumber } = values;
        try {
            const response = await axios.post(`${API_BASE_URL}/api/v1/member/register`, {
                phonenumber: phonenumber,
                email: email,
                name: name,

            });

            console.log(response.data.responseCode);
            if (response.data.responseCode === 200) {
                Swal.fire("Success", "Silahkan lanjutkan peminjaman buku anda", 'success');
                navigate('/');
            } else {
                Swal.fire("info", "Gagal melanjutkan peminjaman buku anda", 'info');
            }

        } catch (e) {
            console.log(e);
            Swal.fire("info", e, 'info');

        }
    }
    return (
        <animated.div style={stylesIconAnimated}>
            <Helmet>
                <title>Daftar</title>
                <meta name="description" content="Helmet application" />
            </Helmet>


            <PageWrapper>
                <br />
                <Title>Create new Account</Title>
                <Subtitle style={{ 'marginTop': '-5px' }}>Already Registered? <Link to="/">Book Now</Link>.</Subtitle>
                <StyledForm
                    name="create_account"
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                >
                    <Typography.Title level={5} style={{ 'color': '#fff' }}>Nama</Typography.Title>

                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}
                    >
                        <Input size="large" placeholder="Jiara Martins" />
                    </Form.Item>
                    <Typography.Title level={5} style={{ 'color': '#fff' }}>Phone Number</Typography.Title>

                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                    >
                        <Input size="large" placeholder="628112345678" />
                    </Form.Item>
                    <Typography.Title level={5} style={{ 'color': '#fff' }}>Email</Typography.Title>

                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input size="large" type='email' placeholder="hello@reallygreatsite.com" />
                    </Form.Item>



                    <br /><br />
                    <Form.Item
                        name="terms"
                        valuePropName="checked"
                        rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept terms and conditions') }]}
                    >
                        <Terms>I accept the terms and conditions</Terms>
                    </Form.Item>
                    <Form.Item>
                        <StyledButton type="primary" htmlType="submit" size='large'>
                            Join
                        </StyledButton>

                    </Form.Item>
                </StyledForm>
            </PageWrapper>
        </animated.div>
    );
};

export default SignupScreen;



const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width:420px !important;
  margin:0 auto;
  background: linear-gradient(to bottom, #9dcad9, #004e92);
  color: white;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  color:#000;
  margin-bottom: 0.1rem;
`;

const Subtitle = styled.p`
  margin-bottom: 0.1em;
  color:#000;
`;

const StyledForm = styled(Form)`
  width: 370px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #28a745;
  border-color: #28a745;
`;

const Terms = styled(Checkbox)`
  color: white;
`;


const PositionBtn = styled.div`
    position: fixed;
    z-index:999;
    bottom: 0;
    left: 0;
    right: 0;
    width:50%;

`