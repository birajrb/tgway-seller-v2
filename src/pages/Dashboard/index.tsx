import { ArrowRightOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Card, Col, Flex, Row, Typography } from 'antd';

const { Text } = Typography;

function Dashboard() {
  return (
    <Row gutter={[16, 32]}>
      <Col span={24}>
        <Flex justify="space-between">
          <Flex gap="small" vertical>
            <h1> Summoners Store</h1>
            <Flex gap="small">
              <Text disabled>Seller id: 51</Text>
              <Text disabled>Seller URL: Not Configured</Text>
            </Flex>
          </Flex>
          <Button type="primary" icon={<HomeOutlined />} iconPosition="end">
            Configure Store
          </Button>
        </Flex>
      </Col>
      <Col span={24}>
        <Card>
          <Row gutter={[16, 32]}>
            <Col span={24}>
              <Flex justify="space-between">
                <Flex gap="" vertical>
                  <h2>Bank Account</h2>
                  <Text disabled> Your Payment Processing Details</Text>
                </Flex>
                <Button
                  type="default"
                  color="primary"
                  variant="outlined"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Modify
                </Button>
              </Flex>
            </Col>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Flex vertical>
                    <Text type="secondary">Bank Name</Text>
                    <h3>Not configured</h3>
                  </Flex>
                </Col>
                <Col span={12}>
                  <Flex vertical>
                    <Text type="secondary">Account Number</Text>
                    <h3>Not Configured</h3>
                  </Flex>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Flex vertical>
                    <Text type="secondary">Account Name</Text>
                    <h3>Not configured</h3>
                  </Flex>
                </Col>
                <Col span={12}>
                  <Flex vertical>
                    <Text type="secondary">Branch Name</Text>
                    <h3>Not Configured</h3>
                  </Flex>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Text type="secondary">
                Update your bank details to ensure smooth Payment Processing.
              </Text>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Dashboard;
