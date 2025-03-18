import React from 'react';
import { Button } from 'antd';
import '../App.css'
import styled from 'styled-components';
import logo from '../assets/logo.png';
import mitra from '../assets/mitra.png';
import { useNavigate } from 'react-router-dom';
const StyledIntro = styled.div`overflow:hidden !important`
import { useSpring, animated } from '@react-spring/web';



const App = () => {
    const navigate = useNavigate();

    const stylesIconAnimated = useSpring({
        from: { transform: 'translateX(100%)' }, // Dimulai dari luar layar kanan
        to: { transform: 'translateX(0)' },     // Bergerak ke posisi awal
        config: { tension: 200, friction: 20 }, // Pengaturan animasi
    });


    const styles = useSpring({
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' },
        config: { tension: 200, friction: 20 },
    });

    const stylesTwed = useSpring({
        from: { transform: 'translateY(-100%)' }, // Dimulai dari luar layar atas
        to: { transform: 'translateY(0)' },      // Bergerak ke posisi awal
        config: { tension: 200, friction: 20 },  // Pengaturan animasi
    });

    return (
        <StyledIntro className="container"> 

            <div className="header">
                <animated.div style={stylesIconAnimated}>
                    <Button type="default" shape="round" className="partner-button" onClick={()=> navigate('/login')}>
                        <img src={mitra} /> Mitra
                    </Button>
                </animated.div>
            </div>
 
            <div className="logo-container">
                <img src={logo} className='logointro' />
            </div>

            <div className="services">
                <animated.div style={styles}>
                    <i className="services-text">SELECT YOUR SERVICES</i>
                </animated.div>
                <animated.div style={stylesTwed}>

                    <Button className="service-button shdowOne"
                        onClick={() => navigate("/pilihproduct/internet")}
                    >Internet Only</Button>

                    <Button className="service-button shdowOne" onClick={() => navigate("/pilihproduct/internet-esim")}>Internet + eSIM</Button>
                    <Button className="service-button shdowOne" onClick={() => navigate("/pilihproduct/internet-simcard")}>Internet + Sim Card</Button>
                    <Button className="service-button shdowOne" onClick={() => navigate("/pilihproduct/internet-mifimodem")}>Internet + MiFi Modem</Button>
                </animated.div>
            </div>

        </StyledIntro>
    );
};

export default App;
