import { Button, Card, Col, Flex, Form, Input, Row } from 'antd';

import styles from './styles.module.css';
import { useState } from 'react';
import { getBankDetail, postBankDetail } from '@/api/vendor';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { BankAccountValidators, TBankAccountValidators } from './bankAccount-validators';
import { zodResolver } from '@hookform/resolvers/zod';

function BankAccount() {
  const [loading, setLoading] = useState(false);
  const { data: bankDetail } = useQuery({
    queryKey: ['payment-method'],
    queryFn: () => getBankDetail(),
    enabled: true,
  });
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<TBankAccountValidators>({
    resolver: zodResolver(BankAccountValidators),
  });
  const createBankMutation = useMutation({
    mutationFn: postBankDetail,
    onMutate: () => setLoading(true),

    onSuccess: async (data: any) => {
      setLoading(false);
      // toast(data.message);
      clearErrors();
      reset();
    },
    onError: (error: any) => {
      setLoading(false);
    },
  });
  return (
    <Row>
      <Col span={24}>
        <Card className={styles.borderCol}>
          <Row gutter={[16, 32]}>
            <Col span={24}>
              <Flex>
                <h1
                  className={`${styles['responsive-title']} ${styles.border}`}
                >
                  Bank Account
                </h1>
              </Flex>
            </Col>
            <Col span={24}>
              <Form layout="vertical">
                <Row gutter={[32, 16]}>
                  <Col span={12}>
                    <Form.Item
                      name="bankName"
                      label={(
                        <span className={styles['responsive-text']}>
                          <h4>Bank Name</h4>
                        </span>
                      )}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="accountName"
                      label={(
                        <span className={styles['responsive-text']}>
                          <h4>Account Name</h4>
                        </span>
                      )}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[32, 16]}>
                  <Col span={12}>
                    <Form.Item
                      name="accountNumber"
                      label={(
                        <span className={styles['responsive-text']}>
                          <h4>Account Number</h4>
                        </span>
                      )}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="branchName"
                      label={(
                        <span className={styles['responsive-text']}>
                          <h4>Branch Name</h4>
                        </span>
                      )}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Button className={`${styles.button} ${styles.text}`}>
                  <h5>Modify</h5>
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default BankAccount;
