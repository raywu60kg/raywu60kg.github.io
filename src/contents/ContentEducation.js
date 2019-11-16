import React from 'react';
import 'antd/dist/antd.css';
import { Result, Layout, Icon, Spin, Row, Col, Button, Typography, Divider, Carousel, Card } from 'antd';
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;
class ContentEducation extends React.Component {
    constructor(props) {
        super(props);
    }

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
                        <Col span={8}>
                            {/* <Carousel autoplay style={{textAlign:'center'}}>
                                    <div>

                                        <h5>Chung Hsing University</h5>
                                        <img src="ch.jpg"></img>
                                    </div>
                                    <div>
                                        <h5>National University of Kaohsiung</h5>
                                        <img src="nuk.jpg" alt="Image" ></img>
                                    </div>
                                    <div>
                                        <h5>Zhong-Zheng Senior High School</h5>
                                        <img src="zz.jpg" alt="Image" ></img>
                                    </div>
                                </Carousel> */}
                            <Card
                                hoverable
                                // style={{ width: 240 }}
                                cover={<img alt="ch" src="ch.jpg" />}
                            >
                                <Meta description="Chung Hsing University" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                // style={{ width: 240 }}
                                cover={<img alt="nuk" src="nuk.jpg" />}
                            >
                                <Meta description="National University of Kaohsiung" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                // style={{ width: 240 }}
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