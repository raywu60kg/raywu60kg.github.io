import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Icon, Row, Col, Typography, Card } from 'antd';
const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;
class ContentEducation extends React.Component {

    render() {
        return (
            <Layout>
                <Content style={{ textAlign: 'left', padding: '24px' }}>
                    <Row>
                        <Col span={20}>
                            <Title level={4}><Icon type="book" theme="twoTone" /> National Chung Hsing University, Master of Statistics</Title>
                            <Title level={4}><Icon type="book" theme="twoTone" /> National University of Kaohsiung, Bachelor of Applied Mathematics</Title>
                            <Title level={4}><Icon type="book" theme="twoTone" /> Taipei Municipal Zhong-Zheng Senior High School</Title>
                        </Col>
                    </Row>

                    <Row gutter={[16,250]}>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            
                            <Card
                                cover={<img alt="ch" src="ch.jpg" />}
                            >
                                <Meta description="Chung Hsing University" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Card
                                cover={<img alt="nuk" src="nuk.jpg" />}
                            >
                                <Meta description="National University of Kaohsiung" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Card
                                cover={<img alt="zz" src="zz.jpg" />}
                            >
                                <Meta description="Zhong-Zheng Senior High School"/>
                            </Card>
                        </Col>
                    </Row>

                </Content>
            </Layout>
        )
    }
}
export default ContentEducation;