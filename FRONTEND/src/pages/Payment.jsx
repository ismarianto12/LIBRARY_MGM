import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BottomNavbar from '../components/NavbarBottom';
import * as Icons from 'react-feather'
import { Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [timeLeft, setTimeLeft] = useState(330); // 5 minutes countdown
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
      <Container>
        <Row>
          <CardStyledCard>
            <Row>
              <Col span={16}>
                <Title>Total Payment: Rp. 720.000  </Title>
                <h5>Order ID #14</h5>
              </Col>
              <Col span={8}>
                <Timer>Chose With in: {formatTime(timeLeft)}</Timer>
              </Col>
            </Row>
          </CardStyledCard>
          <HeadingTitle>Select Method </HeadingTitle>
          <PaymentOptions>
            <PaymentOption onClick={() => navigate('/success/payment')}>
              <Icon>
                <Label>Credit/Debit Card</Label>
                <Row>
                  <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="logo" className='payment_detail' />
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                </Row>

              </Icon>
              <Icons.ChevronRight />
            </PaymentOption>
            <hr />
            <PaymentOption>
              <Icon>
                <Label>Bank Transfer</Label>
                <Row>
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                </Row>

              </Icon>
              <Icons.ChevronRight />
            </PaymentOption>
            <hr />
            <PaymentOption>
              <Icon>
                <Label>Gopay / Other - Wallets</Label>
                <Row>
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                </Row>

              </Icon>
              <Icons.ChevronRight />
            </PaymentOption>
            <hr />
            <PaymentOption>
              <Icon>
                <Label>Credit/Debit Card</Label>
                <Row>
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                </Row>

              </Icon>
              <Icons.ChevronRight />
            </PaymentOption>
            <hr />

            <PaymentOption>
              <Icon>
                <Label>Credit/Debit Card</Label>
                <Row>
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                  <img src="https://down-id.img.susercontent.com/file/id-11134258-7rasi-m3elg6a60mmod7" alt="logo" />
                </Row>

              </Icon>
              <Icons.ChevronRight />
            </PaymentOption>
            <hr style={{ 'color': '#000' }} />

          </PaymentOptions>
        </Row>
      </Container>
      <BottomNavbar />
    </>
  );
};

const HeadingTitle = styled.p`font-size:15px; font-weight:bold;padding-left:1.2rem`
const CardStyledCard = styled.div`background:#fff;border-radius:1rem;width:100%;padding:10px 10px 10px 10px; 
                                  margin-bottom:1rem;
                                  widht: 80%;
                                  box-shadow: 0 5.294px 28.235px 0 rgba(61, 71, 81, .1), 0 0 13.235px .882px rgba(61, 71, 81, .08);
                                  `

const Container = styled.div`
          margin: 0 auto;
          padding:2rem;
          overflow: hidden !important;
          background: linear-gradient(to bottom, #46beb4 15%, #ffffff 10%);
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `;

const Title = styled.h1`
  font-size: 15px;
`;

const Timer = styled.div`
  font-size: 12px;
  margin-bottom: 20px;
`;

const PaymentOptions = styled.div`  
  display: flex;
  flex-direction: column;
  overflow:auto;
  height: 80%;
  width: 100%;
  margin: 1rem;
  `;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 2px 7px 7px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  justify-content: space-between;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Icon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

const Label = styled.span`
  font-size: 15px;
  font-weight:bold;
`;

export default Payment;
