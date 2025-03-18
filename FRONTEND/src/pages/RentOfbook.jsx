import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Form, Input, DatePicker, Button, Spin, Alert, Card, Image } from 'antd';
import axios from 'axios';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import Swal from 'sweetalert2';
import BottomNavbar from '../components/NavbarBottom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: auto;
  max-width: 420px !important;
  margin: 0 auto;
  background: linear-gradient(to bottom, rgba(156, 235, 184, 0.72), rgb(43, 139, 224));
  color: white;
`;

const StyledForm = styled(Form)`
  width: 370px;
`;

const BookRent = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [form] = Form.useForm();
    const navigate = useNavigate();

    // State untuk Alert
    const [alert, setAlert] = useState(null);
    const [alertType, setAlertType] = useState('info');
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const stylesIconAnimated = useSpring({
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
    });

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/v1/masterbuku/show/${id}`);
                if (response.data.responseCode === 200) {
                    setBook(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching book:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    const handleSubmit = async (values) => {
        const { member_id, rent_date, return_date } = values;

        Swal.showLoading();
        Swal.fire("Please Wait....");

        try {
            setLoadingSubmit(true);
            setAlert(null); // Reset alert sebelum proses

            // Cek apakah user ada
            const checkUserResponse = await axios.post(`${API_BASE_URL}/api/v1/bookrent/checkid`, { email: member_id });
            if (checkUserResponse.data.responseCode !== 200) {
                setAlert(``);
                Swal.fire("Opps", "Member ID tidak ditemukan. Silakan cek kembali. Atau Silahkan Register akun anda disini", 'error');

                setAlertType('error');
                setLoadingSubmit(false);
                return;
            }

            // Kirim data peminjaman
            const response = await axios.post(`${API_BASE_URL}/api/v1/bookrent/pinjam`, {
                book_id: id,
                email: member_id,
                member_id: 1,
                rent_date,
                return_date,

            });

            if (response.data.responseCode === 200) {
                Swal.fire("Success", "Silahkan lanjutkan peminjaman buku anda", 'success');

                setAlert('Book rented successfully!');
                setAlertType('success');
                navigate('/success');
            } else {
                setAlert('Gagal menyimpan data peminjaman.');
                setAlertType('error');
            }
        } catch (error) {
            setAlert('Terjadi kesalahan dalam proses peminjaman.');
            setAlertType('error');
        } finally {
            setLoadingSubmit(false);
        }
    };

    if (loading) {
        return <Spin size="large" />;
    }

    return (
        <PageWrapper>
            <Image src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" style={{ width: '100%' }} />
            <animated.div style={stylesIconAnimated}>
                <h4>{book?.title}</h4>

                {/* Tampilkan Alert jika ada pesan */}
                {alert && <Alert message={alert} type={alertType} showIcon closable style={{ marginBottom: 10 }} />}

                <StyledForm form={form} onFinish={handleSubmit} layout="vertical" loading={loadingSubmit}>
                    <Form.Item name="book_id" label="ISBN" initialValue={id} style={{ maxWidth: '100%' }}>
                        <Input disabled />
                    </Form.Item>
                    <Form.Item name="member_id" label="Email" rules={[{ required: false, message: 'Member ID is required' }]}>
                        <Input type='email' />
                        <small> Belum punya member silahkan daftar <Link to="/signup">disini</Link></small>
                    </Form.Item>
                    <Form.Item name="rent_date" label="Rent Date" rules={[{ required: true, message: 'Rent Date is required' }]}>
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item name="return_date" label="Return Date" rules={[{ required: true, message: 'Return Date is required' }]}>
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="default" htmlType="submit" style={{ textAlign: 'center', position: 'fixed', bottom: '0', width: '100%' }} loading={loadingSubmit}>
                            Submit
                        </Button>
                    </Form.Item>
                </StyledForm>
            </animated.div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <BottomNavbar />

        </PageWrapper>
    );
};

export default BookRent;
