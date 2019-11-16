import React from 'react';
import 'antd/dist/antd.css';
import { Result, Layout, Icon, Spin, Row, Col, Button, Typography, Divider } from 'antd';
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

class ContentExperience extends React.Component {
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
                                    <Title level={4}>Groundhog Technologies</Title>
                                    Data Scientist 
                                </Paragraph>
                            </Typography>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
export default ContentExperience;