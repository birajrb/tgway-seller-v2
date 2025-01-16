import {
  ArrowRightOutlined,
  DropboxOutlined,
  HomeOutlined,
  ProductOutlined,
} from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Flex, Row, Typography } from 'antd';

import styles from './styles.module.css';

const { Text } = Typography;

function Dashboard() {
  return (
    <Row gutter={[16, 32]}>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col sm={24} xl={24}>
            <Flex justify="space-between" gap="middle" wrap>
              <Flex gap="small" vertical>
                <h1>Summoners Store</h1>
                <Flex gap="small">
                  <Text disabled>Seller id: 51</Text>
                  <Text disabled>Seller URL: Not Configured</Text>
                </Flex>
              </Flex>
              <Button
                className={styles.button}
                icon={<HomeOutlined className={styles.icons} />}
                iconPosition="end"
              >
                <span className={styles.text}>Configure Store</span>
              </Button>
            </Flex>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Card>
          <Row gutter={[16, 32]}>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col sm={8} md={24} xl={24}>
                  <Flex justify="space-between" gap="small" wrap>
                    <Flex vertical>
                      <h2>Bank Account</h2>
                      <Text disabled> Your Payment Processing Details</Text>
                    </Flex>
                    <Button
                      type="default"
                      className={styles.icon}
                      variant="outlined"
                      icon={<ArrowRightOutlined className={styles.icon} />}
                      iconPosition="end"
                    >
                      Modify
                    </Button>
                  </Flex>
                </Col>
              </Row>
            </Col>
            <Col sm={8} md={16} xl={24}>
              <Row gutter={[16, 16]}>
                <Col sm={8} md={12}>
                  <Flex vertical>
                    <Text type="secondary">Bank Name</Text>
                    <h3>Not configured</h3>
                  </Flex>
                </Col>
                <Col sm={8} md={12}>
                  <Flex vertical>
                    <Text type="secondary">Account Number</Text>
                    <h3>Not Configured</h3>
                  </Flex>
                </Col>
              </Row>
            </Col>
            <Col sm={8} md={16} xl={24}>
              <Row gutter={[16, 16]}>
                <Col sm={8} md={12} lg={12} xl={12}>
                  <Flex vertical>
                    <Text type="secondary">Account Name</Text>
                    <h3>Not configured</h3>
                  </Flex>
                </Col>
                <Col sm={8} md={12} lg={12} xl={12}>
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
        <Row gutter={[16, 16]}>
          <Col sm={8} md={12} xl={12}>
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
          <Col sm={8} md={12} xl={12}>
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
                      className={styles.icon}
                      icon={<ArrowRightOutlined className={styles.icon} />}
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
        <Row gutter={[32, 16]}>
          <Col sm={32} md={8} xl={8}>
            <Card>
              <Flex gap="small" vertical>
                <Flex justify="space-between">
                  <h3>Total Product</h3>
                  <ProductOutlined className={styles.icon} />
                </Flex>
                <h1>2+</h1>
                <Text type="secondary">New products added in last 7 days.</Text>
              </Flex>
            </Card>
          </Col>
          <Col sm={32} md={8} xl={8}>
            <Card>
              <Flex gap="small" vertical>
                <Flex justify="space-between">
                  <h3>Total Order value</h3>
                  <DropboxOutlined className={styles.icon} />
                </Flex>
                <h1>RS 20,000</h1>
                <Text type="secondary">
                  Order value increased in the last 2 days.
                </Text>
              </Flex>
            </Card>
          </Col>
          <Col sm={32} md={8} xl={8}>
            <Card>
              <Flex gap="small" vertical>
                <Flex justify="space-between">
                  <h3>Total Return</h3>
                  <ProductOutlined className={styles.icon} />
                </Flex>
                <h1>1</h1>
                <Text type="secondary">
                  Returns decreased in the last 2 days.
                </Text>
              </Flex>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Dashboard;
