import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spin, Button } from 'antd';
import axios from 'axios';
import styled from 'styled-components';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const { Meta } = Card;
const StyledIntro = styled.div`overflow:auto !important`


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width:420px !important;
  margin:0 auto;
  background: linear-gradient(to bottom, #9dcad9, #004e92);
  color: white;
`;

const StyledButton = styled(Button)`
  width: 90%;
  margin: 0.6rem; 
  background-color: #28a745;
  border-color: #28a745;
  position:fixed;
  color:#000;
  bottom:0;
`;

const ListCatalog = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [getid, setId] = useState('');
    const navigate = useNavigate();

    const stylesIconAnimated = useSpring({
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
    });
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/masterbuku/index');
                if (response.data.responseCode === 200) {
                    setBooks(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching books:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <Spin size="large" />;
    }


    return (
        <>
            <PageWrapper>
                <animated.div style={stylesIconAnimated}>

                    <StyledIntro className="container">

                        <div className="services">

                            <div style={{ padding: '24px' }}>
                                <Row gutter={[16, 16]}>
                                    {books?.map((book) => (
                                        <Col

                                            key={book.id} xs={24} onClick={() => setId(book.id)} style={book.id == getid ? { 'border': '5px solid orange', 'borderRadius': '10px' } : ""}

                                        >
                                            <Card
                                                hoverable
                                                cover={<img alt={book.title} src={'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg'} />}
                                            >
                                                <Meta title={book.title} description={`Author: ${book.author}`} />
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>

                    </StyledIntro>
                    <StyledButton type="primary" htmlType="submit" size='large' disabled={getid == ""}
                        onClick={() => navigate(`/rentbook/${getid}`)}
                    >
                        {getid == "" ? "Silahkan Pilih Buku" : "Pinjam Sekarang"}
                    </StyledButton>
                </animated.div>
            </PageWrapper >
        </>

    );
};

export default ListCatalog;