import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Icon, Row, Col, Typography, Rate } from 'antd';
const { Content } = Layout;
const { Title, Paragraph } = Typography;

class ContentSkills extends React.Component {

    render() {
        return (
            <Layout>
                <Content style={{ textAlign: 'left', padding: '24px' }}>
                    <Row>
                        <Col span={18}>
                            <Typography>
                                <Title level={4}>Python</Title>
                            </Typography>
                            <Rate
                                disabled defaultValue={4}
                                allowHalf={true}
                                character={<Icon type="smile" />}
                                style={{ fontSize: '12px', color: '#08c' }}
                            />
                            <Typography>
                                <Paragraph>
                                    Machine Learning, Deep Learning, Data Virtualization
                                </Paragraph>

                                <Title level={4}>R</Title>
                            </Typography>
                            <Rate
                                disabled defaultValue={3.5}
                                allowHalf={true}
                                character={<Icon type="smile" />}
                                style={{ fontSize: '12px', color: '#08c' }}
                            />
                            <Typography>
                                <Paragraph>
                                    Statistical Analysis, Data Virtualization, Exploratory Data Analysis.
                                </Paragraph>
                                <Title level={4}>JavaScript</Title>
                            </Typography>
                            <Rate
                                disabled defaultValue={2}
                                allowHalf={true}
                                character={<Icon type="smile" />}
                                style={{ fontSize: '12px', color: '#08c' }}
                            />
                            <Typography>
                                <Paragraph>
                                    React.js, Node.js
                                </Paragraph>
                                <Title level={4}>Docker</Title>
                            </Typography>
                            <Rate
                                disabled defaultValue={3.5}
                                allowHalf={true}
                                character={<Icon type="smile" />}
                                style={{ fontSize: '12px', color: '#08c' }}
                            />
                            <Typography>
                                <Paragraph>
                                    Docker Container, Docker Image
                                </Paragraph>

                            </Typography>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
export default ContentSkills;