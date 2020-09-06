import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Button, Typography } from 'antd';
const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;
class ContentAboutMe extends React.Component {

    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: '24px 16px 64px', textAlign: 'center' }}>
                    <Title level={3}>About Wu Hao-Hsiang</Title>
                </Header>
                <Content style={{ textAlign: 'left', padding: '24px' }}>
                    <Row>
                        <Col span={18}>
                            <Typography>
                                <Paragraph>
                                    My name is Ray. I earned my master degree in statistics from National Chung Hsing University, I am interested in data analysis, machine learning and deep learning. Additionally, I have some experience in docker, javascript and machine learning workflow. Dedicated to becoming a full-stack data scientist.
                                </Paragraph>
                            </Typography>
                        </Col>

                    </Row>

                    <Row gutter={[0, 32]}>
                        <Col span={24} style={{ textAlign: 'left' }}>
                            <Button
                                type="link"
                                icon="github"
                                style={{ fontSize: '24px' }}
                                href='https://github.com/raywu60kg'
                            />
                            <Button
                                type="link"
                                icon="mail"
                                style={{ fontSize: '24px', marginLeft: 8 }}
                                href='mailto:wuhaohsiang1992@gmail.com'
                            />
                            <Button
                                type="link"
                                icon="medium"
                                style={{ fontSize: '24px', marginLeft: 8 }}
                                href="https://medium.com/wu-hao-hsiang"
                            />

                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
export default ContentAboutMe;