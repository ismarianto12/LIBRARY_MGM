// Import dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Card, Button, Collapse, Tag, List, Result } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useSpring, animated } from '@react-spring/web';
import { useNavigate, useParams } from "react-router-dom";
import useMobileDetect from "../utils/MobileDetect";
import { getProduct } from "../utils/ConstProduct";
const { Panel } = Collapse;

const packages = [
    { title: "AIGO BRONET 24 Jam 22GB 30hr", price: "Rp85.000" },
    { title: "AIGO Mini Bronet 24Jam 8GB + Lokal, 15hr", price: "Rp45.000" },
];

const promoPackages = [
    { title: "AIGO Bronet 24Jam 30GB + Lokal 30hr", price: "Rp90.000", promo: "PROMO!!!" },
    { title: "AIGO Bronet 24Jam 20GB + Lokal 30hr", price: "Rp70.000", discount: "7%" },
    { title: "AIGO Bronet 24Jam 14GB + Lokal 30hr", price: "Rp56.000", discount: "7%" },
];

const PilihProduct = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate()
    let { id } = useParams()

    useEffect(() => {
    }, [])
    const mobiledetect = useMobileDetect()
    const handleSelect = (index) => {
        setSelectedIndex(index);
    };
    const stylesIconAnimated = useSpring({
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' },
        config: { tension: 200, friction: 20 },
    });
    const product = getProduct(id);
    return (

        <Container>
            {
                product?.name !== undefined ?
                    <>
                        <animated.div style={stylesIconAnimated}>

                            <Header>
                                <Button type="primary" shape="circle"
                                    onClick={() => navigate('/')}
                                    icon={
                                        <ArrowLeftOutlined style={{ fontSize: 18 }} />
                                    } />
                                <Title>Paket Data</Title>
                            </Header>
                            <ContainerSearch>

                                <StyledInput placeholder="Nomor HP atau Kontak" defaultValue="083182305714" allowClear />

                            </ContainerSearch>
                            <SectionTitle>Spesial buat nomormu!</SectionTitle>
                            <List

                                dataSource={packages}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Card style={{ width: "100%" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <span>{item.title}</span>
                                                <PriceTag>{item.price}</PriceTag>
                                            </div>
                                        </Card>
                                    </List.Item>
                                )}
                            />

                            <Collapse ghost size="large">
                                <Panel header="Lihat lebih banyak" key="1">
                                    <p>Additional packages...</p>
                                </Panel>
                            </Collapse>

                            <SectionTitle>Mau beli paket berapa? 📱</SectionTitle>
                            <List
                                dataSource={promoPackages}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <StyledCard
                                            className={selectedIndex === index ? "selected" : ""}
                                            onClick={() => handleSelect(index)}
                                        >
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div>
                                                    <span>{item.title}</span>
                                                    {item.promo && <PromoTag>{item.promo}</PromoTag>}
                                                </div>
                                                <PriceTag>{item.price}</PriceTag>
                                            </div>
                                            {item.discount && <Tag color="red">-{item.discount}</Tag>}
                                        </StyledCard>
                                    </List.Item>
                                )}
                            />
                            <br /><br /><br />
                        </animated.div>

                        <div style={{ background: 'transparent', marginTop: 16, textAlign: "center", position: 'fixed', width: '100%', bottom: 0, margin: '0 auto', left: 0, right: 0 }}>
                            <Button type="primary" style={mobiledetect ? { 'width': '93%' } : { 'width': '33%' }}
                                size="large"
                                onClick={() => navigate('/konfirmasi')}

                            >Konfirmasi</Button>
                        </div>
                    </> :
                    <>

                        <Result
                            type="500"
                            title={
                                <>
                                    Jenis Product tidak tersedia</>
                            }
                            subTitle={<>
                                Jenis Product tidak tersedia
                                <br />
                                <Button onClick={() => navigate('/')} type="primary" width={"100%"}>Kembali</Button>
                            </>}
                        />
                    </>


            }
        </Container>
    );
};

export default PilihProduct;



// Styled Components
const Container = styled.div`
  padding: 16px;
  background: linear-gradient(to bottom, #46beb4 12%, #ffffff 10%);

`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  color : #fff;
  margin-left: 16px;
  font-size: 18px;
  font-weight: bold;
`;

const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin: 16px 0 8px;
  font-weight: bold;
`;

const PriceTag = styled(Tag)`
  font-size: 14px;
  font-weight: bold;
  color: #1890ff;
`;

const PromoTag = styled(Tag)`
  font-size: 12px;
  color: #fff;
  background-color: orange;
`;

const StyledCard = styled(Card)`
  width: 100%;
  cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   }

  &.selected {
    border: 2px solid #1890ff;
  }
`;


const ContainerSearch = styled.div`
  border-radius: 1rem;
  margin: 0 auto;
  overflow: hidden !important;
  padding: 20px 20px 0px 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 5.294px 28.235px 0 rgba(61, 71, 81, .1), 0 0 13.235px .882px rgba(61, 71, 81, .08);

`;
