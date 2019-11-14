import React from 'react';
import 'antd/dist/antd.css';
import { Result, Layout, Icon, Spin, Row, Col, Button } from 'antd';
const { Content } = Layout;

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Content style={{ textAlign: 'left', padding: '24px' }}>
                    <Row>
                        <Col span={18}>
                            My name is Ray. I earned my master degree in statistics from National Chung Hsing University, I am interested in data analysis, machine learning and deep learning. Additionally, I have some experience in docker, javascript and machine learning workflow. Dedicated to becoming a full-stack data scientist.

                        </Col>

                    </Row>

                    <Row gutter={[0, 32]}>
                        <Col span={24} style={{ textAlign: 'left' }}>
                            <Button type="link" icon="github" style={{ fontSize: '24px' }} />
                            <Button type="link" icon="mail" style={{ fontSize: '24px', marginLeft: 8 }} />
                            <Button type="link" icon="medium" style={{ fontSize: '24px', marginLeft: 8 }} />


                            {/* <Button type="link"  >
                                <Icon type="github" style={{ fontSize: '24px'}}/>
                            </Button>
                            <Button type="link"  style={{ marginLeft: 4 }}>
                                <Icon type="mail" style={{ fontSize: '24px'}}/>
                            </Button>
                            <Button type="link"  style={{ marginLeft: 4 }}>
                                <Icon type="medium" style={{ fontSize: '24px'}}/>
                            </Button> */}
                            {/* <Icon type="github" style={{ fontSize: '24px'}}/>
                            <Icon type="mail" style={{ fontSize: '24px',marginLeft: 8}}/>
                            <Icon type="medium" style={{ fontSize: '24px',marginLeft: 8}}/> */}

                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
export default AboutMe;