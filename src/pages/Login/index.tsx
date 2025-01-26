import { Link } from 'react-router-dom';
import { GoogleOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Flex, Form, Input, Typography } from 'antd';

import styles from './styles.module.css';

function Login() {
  const { Text, Title } = Typography;
  return (
    <Flex justify="center" align="center" className={styles.container} gap={6}>
      <Flex vertical gap={20} className={styles.card}>
        <Flex justify="center">
          <img src="/logo.png" alt="logo" />
        </Flex>
        <Card>
          <Flex align="center" vertical className={styles.title}>
            <Title level={4}>Welcome back</Title>
            <Text type="secondary" strong>Login with your google account</Text>
          </Flex>
          <Flex>
            <Button
              className={styles.button}
              icon={<GoogleOutlined />}
            >
              Login with Google
            </Button>
          </Flex>
          <Divider>
            <Text type="secondary">
              Or continue with
            </Text>
          </Divider>
          <Flex vertical gap={16}>
            <Form layout="vertical" className={styles.form}>
              <Form.Item label="Email">
                <Input
                  placeholder="m@example.com"
                  size="middle"
                />
              </Form.Item>
              <Form.Item label="Password">
                <Input.Password
                  placeholder="m@example.com"
                  size="middle"
                />
              </Form.Item>
              <Flex vertical gap={16}>
                <Flex justify="end">
                  <Link to="/forgot-password">
                    <Text strong>
                      Forgot Your Password?
                    </Text>
                  </Link>
                </Flex>
                <Button
                  className={styles.button}
                  type="primary"
                >
                  Login
                </Button>
              </Flex>
            </Form>
            <Flex justify="center">
              Don&apos;t have an account?
              <Link to="/sign-up" className={styles.link}>
                Sign up
              </Link>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}

export default Login;
