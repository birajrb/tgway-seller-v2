import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoogleOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, Card, Divider, Flex, Form, Input, Typography } from 'antd';
import { toast } from 'sonner';

import AuthContext from '@/contexts/auth';
import { baseRequest } from '@/lib/base';
import { LoginProps, LoginResponseProps } from '@/types';

import styles from './styles.module.css';

const login = async (body: LoginProps) => {
  const response = await baseRequest({
    url: '/seller/login',
    method: 'POST',
    body: JSON.stringify(body),
    contentType: 'application/json',
  });

  return response;
};

function Login() {
  const { Text, Title } = Typography;
  const [form] = Form.useForm();

  const { login: userLogin } = useContext(AuthContext);

  const createPostMutation = useMutation({
    mutationFn: login,
    onSuccess: (data: LoginResponseProps) => {
      if (data.code === 500) {
        toast.error(data.message);
      } else if (data) {
        userLogin(data?.data?.token, {
          id: data.data.seller.id,
          name: data.data.seller.contact_person_name,
        });
        toast.message(data.message);
      } else {
        toast.error('Some error occurred while logging in');
      }
    },
    onError: (error) => {
      console.warn(error.message);
    },
  });

  const onFinish = (values: LoginProps) => {
    createPostMutation.mutate(values);
  };

  return (
    <Flex justify="center" align="center" className={styles.container} gap={6}>
      <Flex vertical gap={20} className={styles.card}>
        <Flex justify="center">
          <img src="/logo.png" alt="logo" />
        </Flex>
        <Card>
          <Flex align="center" vertical className={styles.title}>
            <Title level={4}>Welcome back</Title>
            {/* <Text type="secondary" strong>Login with your google account</Text> */}
          </Flex>
          {/* <Flex>
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
          </Divider> */}
          <Flex vertical gap={16}>
            <Form
              layout="vertical"
              className={styles.form}
              form={form}
              onFinish={onFinish}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input
                  placeholder="m@example.com"
                  size="middle"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter password' }]}
              >
                <Input.Password
                  placeholder="m@example.com"
                  size="middle"
                />
              </Form.Item>
              <Flex
                vertical
                gap={16}
              >
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
                  htmlType="submit"
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
