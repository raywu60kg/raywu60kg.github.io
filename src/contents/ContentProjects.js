import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Typography } from 'antd';
const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

class ContentProjects extends React.Component {

    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: '24px 16px 64px', textAlign: 'center' }}>
                    <Title level={3}>projects</Title>
                </Header>
                <Content style={{ textAlign: 'left', padding: '24px' }}>
                    <Row>
                        <Col span={18}>
                            <Typography>
                                <Paragraph>
                                    <Title level={4}><a href="https://github.com/raywu60kg/tensorlfow-project-demo">Tensorflow project demo</a></Title>
                                    <Content>
                                        Demo project for solving real world machine learning problems using tensorflow.
                                    </Content>
                                    <Title level={4}><a href="https://github.com/raywu60kg/lightgbm-project-demo">Ligthgbm projec demo</a></Title>
                                    <Content>
                                        Demo project for solving real world machine learning problems using ligthgbm.

                                    </Content>
                                    <Title level={4}><a href="https://github.com/raywu60kg/data-scientists">Data scientists working environment</a></Title>
                                    <Content>
                                        A docker image that data scientists can use to start their working environment easily.
                                    </Content>
                                    <Title level={4}><a href="https://github.com/raywu60kg/kaggles">kaggles</a></Title>
                                    <Content>
                                        Using colab to create some jupyter notebooks to do basic predictions in kaggle.
                                    </Content>
                                    <Title level={4}><a href="https://github.com/raywu60kg/spark-scala-kaggles">Spark Scala Kaggles</a></Title>
                                    <Content>
                                        Using scala spark to train models for kaggle competition
                                    </Content>
                                    <Title level={4}><a href="https://github.com/raywu60kg/random-lunch">Lunch random selector</a></Title>
                                    <Content>
                                        A python flask server to select the lunch.
                                    </Content>
                                    <Title level={4}><a href="https://github.com/raywu60kg/print-function">Print function</a></Title>
                                    <Content>
                                        A python package overwrite our print function.
                                    </Content>
                                    <Title level={4}><a href="https://github.com/raywu60kg/Tower-of-Hanoi">Tower of Hanoi</a></Title>
                                    <Content>
                                        A simple tower of hanoi game build by R shiny.
                                    </Content>
                                    <Title level={4}><a href="https://github.com/raywu60kg/machine-learning-dashboard">Machine learning dashboard</a></Title>
                                    <Content>
                                        A react.js dashboard for machine learning-related purposes.
                                    </Content>
                                </Paragraph>
                            </Typography>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
export default ContentProjects;