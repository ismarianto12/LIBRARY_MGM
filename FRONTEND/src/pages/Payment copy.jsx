import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BottomNavbar from '../components/NavbarBottom';
import * as Icons from 'react-feather'
import { Card, Row } from 'antd';

const Payment = () => {
    const [timeLeft, setTimeLeft] = useState(330); // 5 minutes countdown

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
                    <div>
                        <Title>Total Payment: Rp. 720.000  </Title>
                        <Timer>Time left: {formatTime(timeLeft)}</Timer>
                    </div>
                    <PaymentOptions>
                        <PaymentOption>
                            <Icon>💳</Icon>
                            <Label>Credit/Debit Card</Label>
                            <Icons.ChevronRight />
                        </PaymentOption>
                        <PaymentOption>
                            <Icon>🏦</Icon>
                            <Label>Bank Transfer</Label>
                            <Icons.ChevronRight />
                        </PaymentOption>
                        <PaymentOption>
                            <Icon>📱</Icon>
                            <Label>GoPay/Other e-Wallets </Label>
                            <Icons.ChevronRight />
                        </PaymentOption>
                        <PaymentOption>
                            <Icon>📱</Icon>
                            <Label>ShopeePay/Other e-Wallets</Label>
                            <Icons.ChevronRight />
                        </PaymentOption>
                        <PaymentOption>
                            <Icon>💻</Icon>
                            <Label>BCA KlikPay</Label>
                            <Icons.ChevronRight />

                        </PaymentOption>
                        <PaymentOption>
                            <Icon>💻</Icon>
                            <Label>OCTO Clicks</Label>
                            <Icons.ChevronRight />
                        </PaymentOption>
                    </PaymentOptions>
                </Row>
            </Container>
            <BottomNavbar />
        </>
    );
};

const Container = styled.div`

  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  overflow: hidden !important;
  padding: 20px;
  background: linear-gradient(to bottom, #f0f0f0, #e6f7ff);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Timer = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
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
  font-size: 16px;
`;

export default Payment;
