import React from 'react';
import 'antd/dist/antd.css';
import { Result, Layout, Icon, Spin, Row, Col, Button, Typography, Divider } from 'antd';
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

class ContentProjects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Content style={{ textAlign: 'left', padding: '24px' }}>
                    <Row>
                        <Col span={18}>
                            <Typography>
                                <Paragraph>
                                    <Title level={4}>Python</Title>
                                    <ul>
                                        <li>
                                            <a href="https://github.com/raywu60kg/print-function">print-function</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/raywu60kg/pytest-demo">pytest-demo</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/raywu60kg/ray-tune-demo">ray-tune-demo</a>
                                        </li>
                                    </ul>
                                    <Title level={4}>R Shiny</Title>
                                    <ul>
                                        <li>
                                            <a href="https://raywu60kg.shinyapps.io/Tower-of-Hanoi">Tower-of-Hanoi</a>
                                        </li>
                                    </ul>
                                    <Title level={4}>React.js</Title>
                                    <ul>
                                        <li>
                                            <a href="https://raywu60kg.github.io/machine-learning-dashboard">Machine Learning Dashboard</a>
                                        </li>
                                    </ul>                                   
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