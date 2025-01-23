import {
  ArrowRightOutlined,
  DollarOutlined,
  DropboxOutlined,
  HomeOutlined,
  ProductOutlined,
} from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Flex, Row, Typography } from 'antd';

import {
  getBankDetail,
  getDashboardContent,
  getDashboardOrders,
} from '@/api/vendor';
import { useQuery } from '@tanstack/react-query';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { PieChartData } from './Pie';
import { BarChartData } from './Bar';

const { Text } = Typography;

function Dashboard() {
  const { data: bankDetail } = useQuery({
    queryKey: ['bank-detail'],
    queryFn: () => getBankDetail(),
  });
  const { data: order } = useQuery({
    queryKey: ['orders'],
    queryFn: () => getDashboardOrders(),
  });
  const { data } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => getDashboardContent(),
  });
  const { data: dataRelease } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => getDashboardContent(),
  });

  return (
    <Row gutter={[16, 32]}>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col sm={24} xl={24}>
            <Flex justify="space-between" gap="middle" wrap>
              <Flex gap="small" vertical>
                <h1 className={styles['responsive-title']}>Summoners Store</h1>
                <Flex gap="small">
                  <Text className={styles['responsive-text']} disabled>
                    Seller id: 51
                  </Text>
                  <Text className={styles['responsive-text']} disabled>
                    Seller URL: Not Configured
                  </Text>
                </Flex>
              </Flex>
              <Button
                className={styles.button}
                icon={<HomeOutlined className={styles.icons} />}
                iconPosition="end"
              >
                <span className={`${styles.text} ${styles['responsive-text']}`}>
                  Configure Store
                </span>
              </Button>
            </Flex>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={[32, 16]}>
          <Col xs={24} sm={24} md={6} xl={6}>
            <Card className={styles.border}>
              <Flex gap="small" vertical>
                <Flex justify="space-between">
                  <h3 className={styles['responsive-sub']}>Total Product</h3>
                  <ProductOutlined className={styles.icon} />
                </Flex>
                <h1 className={styles['responsive-title']}>
                  {data?.total_products}
                </h1>
                <Text className={styles['responsive-text']} type="secondary">
                  New products added in last 7 days.
                </Text>
              </Flex>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={6} xl={6}>
            <Card className={styles.border}>
              <Flex gap="small" vertical>
                <Flex justify="space-between">
                  <h3 className={styles['responsive-sub']}>
                    Total Order value
                  </h3>
                  <DropboxOutlined className={styles.icon} />
                </Flex>
                <h1 className={styles['responsive-title']}>
                  <span>$ </span>
                  {data?.total_earnings}
                </h1>
                <Text className={styles['responsive-text']} type="secondary">
                  Order value increase in the last 2 days.
                </Text>
              </Flex>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={6} xl={6}>
            <Card className={styles.border}>
              <Flex gap="small" vertical>
                <Flex justify="space-between">
                  <h3 className={styles['responsive-sub']}>Total Return</h3>
                  <ProductOutlined className={styles.icon} />
                </Flex>
                <h1 className={styles['responsive-title']}>
                  {data?.total_return}
                </h1>
                <Text className={styles['responsive-text']} type="secondary">
                  Returns decreased in the last 2 days.
                </Text>
              </Flex>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={6} xl={6}>
            <Card className={styles.border}>
              <Flex gap="small" vertical>
                <Flex justify="space-between">
                  <h3 className={styles['responsive-sub']}>Total Commission</h3>
                  <DollarOutlined className={styles.icon} />
                </Flex>
                <h1 className={styles['responsive-title']}>
                  <span> $</span>
                  {dataRelease?.total_commission}
                </h1>
                <Text className={styles['responsive-text']} type="secondary">
                  Total Commission.
                </Text>
              </Flex>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Card className={styles.border}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} xl={24}>
                  <Flex justify="space-between" gap="small" wrap>
                    <Flex vertical>
                      <h2 className={styles['responsive-subtitle']}>
                        Bank Account:
                      </h2>
                      <Text className={styles['responsive-text']} disabled>
                        Your payment processing details.
                      </Text>
                    </Flex>
                    <Button
                      type="default"
                      className={`${styles.icon} ${styles['responsive-text']}`}
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
            <Col xs={24} sm={8} md={24} lg={24} xl={24}>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Flex vertical>
                    <Text
                      className={styles['responsive-text']}
                      type="secondary"
                    >
                      Bank Name:
                    </Text>
                    <h3 className={styles['responsive-sub']}>
                      {bankDetail?.data?.bank_name ?? 'N/A'}
                    </h3>
                  </Flex>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Flex vertical>
                    <Text
                      className={styles['responsive-text']}
                      type="secondary"
                    >
                      Account Number:
                    </Text>
                    <h3 className={styles['responsive-sub']}>
                      {bankDetail?.data?.account_number ?? 'N/A'}
                    </h3>
                  </Flex>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={8} md={24} lg={24} xl={24}>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Flex vertical>
                    <Text
                      className={styles['responsive-text']}
                      type="secondary"
                    >
                      Account Name:
                    </Text>
                    <h3 className={styles['responsive-sub']}>
                      {bankDetail?.data?.account_name ?? 'N/A'}
                    </h3>
                  </Flex>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Flex vertical>
                    <Text
                      className={styles['responsive-text']}
                      type="secondary"
                    >
                      Branch Name:
                    </Text>
                    <h3 className={styles['responsive-sub']}>
                      {bankDetail?.data?.bank_branch ?? 'N/A'}
                    </h3>
                  </Flex>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Text className={styles['responsive-text']} type="secondary">
                Update your bank details to ensure smooth Payment Processing.
              </Text>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Card
              className={`${styles.height} ${styles.scrollY} ${styles.scrollArea}`}
            >
              <Row gutter={[0, 16]}>
                <Col span={24}>
                  <Flex vertical>
                    <h1 className={styles['responsive-title']}>
                      Recent Notifications
                    </h1>
                    <Text
                      className={styles['responsive-text']}
                      type="secondary"
                    >
                      You have 2 unread notifications
                    </Text>
                  </Flex>
                </Col>
                <Col span={24}>
                  <Row gutter={[0, 16]}>
                    <Col span={24}>
                      <Flex vertical>
                        <Checkbox>
                          <h4 className={styles['responsive-sub']}>
                            New Order from Admin.
                          </h4>
                        </Checkbox>
                        <Text
                          type="secondary"
                          className={`${styles.date} ${styles['responsive-text']}`}
                        >
                          Oct, 17
                        </Text>
                      </Flex>
                    </Col>
                    <Col span={24}>
                      <Flex vertical>
                        <Checkbox>
                          <h4 className={styles['responsive-sub']}>
                            {' '}
                            New Order from Admin.
                          </h4>
                        </Checkbox>
                        <Text
                          type="secondary"
                          className={`${styles.date} ${styles['responsive-text']}`}
                        >
                          Oct, 17
                        </Text>
                      </Flex>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Card
              className={`${styles.height} ${styles.scrollY} ${styles.scrollArea}`}
            >
              <Row gutter={[0, 16]}>
                <Col span={24}>
                  <Flex justify="space-between">
                    <Flex vertical>
                      <h1 className={styles['responsive-title']}>New order</h1>
                      <Text
                        className={styles['responsive-text']}
                        type="secondary"
                      >
                        New order
                      </Text>
                    </Flex>
                    <Link to="/order">
                      <Button
                        type="link"
                        className={`${styles.icon} ${styles['responsive-sub']}`}
                        icon={<ArrowRightOutlined className={styles.icon} />}
                        iconPosition="end"
                      >
                        More
                      </Button>
                    </Link>
                  </Flex>
                </Col>
                {order?.map((data: orderItemsProps, id: number) => (
                  <Col span={24} key={id}>
                    <Card>
                      <Flex justify="space-between">
                        <Flex>
                          <h3 className={styles['responsive-sub']}>
                            {data?.product_name}
                          </h3>
                        </Flex>
                        <Flex>
                          <h3 className={styles['responsive-sub']}>
                            {data?.quantity}
                          </h3>
                        </Flex>
                      </Flex>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={[32, 16]}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card className={styles.chartCard}>
              <h3 className={styles['responsive-subtitle']}>
                Order Payment Status
              </h3>
              <PieChartData />
              <Flex justify="space-between">
                <Flex justify="center" gap="small">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <circle cx="10.5" cy="10.5" r="10" fill="#0199E6" />
                  </svg>
                  <h4 className={styles['responsive-text']}>Paid</h4>
                </Flex>
                <Flex justify="center" gap="small">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <circle cx="10.5" cy="10.5" r="10" fill="#FACD16" />
                  </svg>
                  <h4 className={styles['responsive-text']}>Pending</h4>
                </Flex>
              </Flex>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <Card className={styles.chartCard}>
              <Flex gap="large" vertical>
                <Flex vertical>
                  <Row gutter={[32, 32]}>
                    <Col span={12}>
                      <h3 className={styles['responsive-subtitle']}>
                        Orders Diagram
                      </h3>
                    </Col>
                  </Row>
                </Flex>
                <BarChartData />
              </Flex>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Dashboard;
