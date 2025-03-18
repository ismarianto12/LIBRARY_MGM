import React from 'react';
import { Form, Input, Button, Upload, Typography } from 'antd';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CreateBook = () => {
    const stylesIconAnimated = useSpring({
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
    });
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('author', values.author);
        formData.append('isbn', values.isbn);
        if (values.file && values.file[0]?.originFileObj) {
            formData.append('image', values.file[0].originFileObj);
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/api/v1/masterbuku/store`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            
            if (response.status === 200) {
                Swal.fire("Success", "buku berhasil ditambahkan", 'success');
                navigate('/');
            } else {
                Swal.fire("Info", "gagal menambahkan buku", 'info');
            }
        } catch (e) {
            console.error(e);
            Swal.fire("Error", "Terjadi kesalahan", 'error');
        }
    }

    return (
        <animated.div style={stylesIconAnimated}>
            <Helmet>
                <title>Tambah Buku</title>
                <meta name="description" content="Tambah buku baru" />
            </Helmet>

            <PageWrapper>
                <Title>Tambah Buku</Title>
                <StyledForm name="create_book" onFinish={handleSubmit}>
                    <Typography.Title level={5}>Judul</Typography.Title>
                    <Form.Item name="title" rules={[{ required: true, message: 'Masukkan judul buku!' }]}>
                        <Input size="large" placeholder="Judul Buku" />
                    </Form.Item>
                    
                    <Typography.Title level={5}>Penulis</Typography.Title>
                    <Form.Item name="author" rules={[{ required: true, message: 'Masukkan nama penulis!' }]}>
                        <Input size="large" placeholder="Nama Penulis" />
                    </Form.Item>
                    <Typography.Title level={5}>ISBN</Typography.Title>
                    <Form.Item name="author" rules={[{ required: true, message: 'Masukkan ISBN!' }]}>
                        <Input size="large" placeholder="ISBN" />
                    </Form.Item>


                    <Typography.Title level={5}>File</Typography.Title>
                    <Form.Item name="file" valuePropName="fileList" getValueFromEvent={(e) => e && e.fileList}>
                        <Upload beforeUpload={() => false} listType="picture">
                            <Button>Upload File</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item>
                        <StyledButton type="primary" htmlType="submit" size='large'>Tambah Buku</StyledButton>
                    </Form.Item>
                </StyledForm>
            </PageWrapper>
        </animated.div>
    );
};

export default CreateBook;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 420px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #9dcad9, #004e92);
  color: white;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  color: #000;
  margin-bottom: 0.1rem;
`;

const StyledForm = styled(Form)`
  width: 370px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #28a745;
  border-color: #28a745;
`;