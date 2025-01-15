import {
  ArrowRightOutlined,
  DropboxOutlined,
  HomeOutlined,
  ProductOutlined,
  RollbackOutlined,
} from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Flex, Row, Typography } from 'antd';

import styles from './styles.module.css';

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
      <Col span={24}>
        <Row gutter={[16, 0]}>
          <Col span={12}>
            <Card>
              <Row gutter={[0, 32]}>
                <Col span={24}>
                  <Flex vertical>
                    <h1>Recent Notifications</h1>
                    <Text type="secondary">
                      You have 2 unread notifications
                    </Text>
                  </Flex>
                </Col>
                <Col span={24}>
                  <Row gutter={[0, 16]}>
                    <Col span={24}>
                      <Flex vertical>
                        <Checkbox>
                          <h4> New Order from Admin.</h4>
                        </Checkbox>
                        <Text type="secondary" className={styles.date}>
                          Oct, 17
                        </Text>
                      </Flex>
                    </Col>
                    <Col span={24}>
                      <Flex vertical>
                        <Checkbox>
                          <h4> New Order from Admin.</h4>
                        </Checkbox>
                        <Text type="secondary" className={styles.date}>
                          Oct, 17
                        </Text>
                      </Flex>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Row gutter={[0, 32]}>
                <Col span={24}>
                  <Flex justify="space-between">
                    <Flex vertical>
                      <h1>New order</h1>
                      <Text type="secondary">2+ New order</Text>
                    </Flex>
                    <Button
                      type="link"
                      icon={<ArrowRightOutlined />}
                      iconPosition="end"
                    >
                      More
                    </Button>
                  </Flex>
                </Col>
                <Row gutter={[0, 16]}>
                  <Col span={24}>
                    <Flex vertical>
                      <Checkbox>
                        <h4> New Order from Admin.</h4>
                      </Checkbox>
                      <Text type="secondary" className={styles.date}>
                        Oct, 17
                      </Text>
                    </Flex>
                  </Col>
                  <Col span={24}>
                    <Flex vertical>
                      <Checkbox>
                        <h4> New Order from Admin.</h4>
                      </Checkbox>
                      <Text type="secondary" className={styles.date}>
                        Oct, 17
                      </Text>
                    </Flex>
                  </Col>
                </Row>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={[32, 0]}>
          <Col span={8}>
            <Card>
              <Flex justify="center" gap="small" vertical>
                <Flex justify="center">
                  <Text underline>11</Text>
                </Flex>
                <Flex justify="center">
                  <ProductOutlined />
                  <h2>Total Product</h2>
                </Flex>
                <Flex justify="center">
                  <Text type="secondary">
                    +2 new products added in the last 7 days.
                  </Text>
                </Flex>
              </Flex>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Flex justify="center" gap="small" vertical>
                <Flex justify="center">
                  <Text underline>2</Text>
                </Flex>
                <Flex justify="center">
                  <DropboxOutlined />
                  <h2>Total Order Value</h2>
                </Flex>
                <Flex justify="center">
                  <Text type="secondary">
                    Order value increased in the last 7 days.
                  </Text>
                </Flex>
              </Flex>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Flex justify="center" gap="small" vertical>
                <Flex justify="center">
                  <Text underline>2</Text>
                </Flex>
                <Flex justify="center">
                  <RollbackOutlined />
                  <h2>Total Return</h2>
                </Flex>
                <Flex justify="center">
                  <Text type="secondary">
                    Return decreased in the last 7 days.
                  </Text>
                </Flex>
              </Flex>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Dashboard;
