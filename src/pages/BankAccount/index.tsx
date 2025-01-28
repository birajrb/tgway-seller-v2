import { Button, Card, Col, Form, Input, Row } from 'antd';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getBankDetail, postBankDetail } from '@/api/vendor';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BankAccountValidators,
  TBankAccountValidators,
} from './bankAccount-validators';

function BankAccount() {
  const [loading, setLoading] = useState(false);

  // Fetch bank details with React Query
  const { data: bankDetail, isLoading: isFetching } = useQuery({
    queryKey: ['payment-method'],
    queryFn: getBankDetail,
    enabled: true,
  });

  // Initialize form with React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<TBankAccountValidators>({
    resolver: zodResolver(BankAccountValidators),
  });

  // Populate form with fetched data once available
  useEffect(() => {
    if (!isFetching && bankDetail?.data) {
      reset(bankDetail.data); // Update form values after data is fetched
    }
  }, [bankDetail, isFetching, reset]);

  // Mutation to submit bank details
  const createBankMutation = useMutation({
    mutationFn: postBankDetail,
    onMutate: () => setLoading(true),
    onSuccess: () => {
      setLoading(false);
    },
    onError: () => {
      setLoading(false);
    },
  });

  // Form submission handler
  const onSubmit = (data: TBankAccountValidators) => {
    createBankMutation.mutate(data);
  };

  return (
    <Row>
      <Col span={24}>
        <Card className={styles.borderCol}>
          <Row gutter={[16, 32]}>
            <Col span={24}>
              <h1 className={`${styles['responsive-title']} ${styles.border}`}>
                Bank Account
              </h1>
            </Col>
            <Col span={24}>
              <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                {/* Form Fields */}
                <Row gutter={[32, 16]}>
                  <Col span={12}>
                    <Form.Item
                      label="Bank Name"
                      validateStatus={errors.bank_name ? 'error' : ''}
                      help={errors.bank_name?.message}
                    >
                      <Controller
                        name="bank_name"
                        control={control}
                        render={({ field }) => (
                          <Input {...field} placeholder="Enter Bank Name" />
                        )}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Account Name"
                      validateStatus={errors.account_name ? 'error' : ''}
                      help={errors.account_name?.message}
                    >
                      <Controller
                        name="account_name"
                        control={control}
                        render={({ field }) => (
                          <Input {...field} placeholder="Enter Account Name" />
                        )}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[32, 16]}>
                  <Col span={12}>
                    <Form.Item
                      label="Account Number"
                      validateStatus={errors.account_number ? 'error' : ''}
                      help={errors.account_number?.message}
                    >
                      <Controller
                        name="account_number"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Enter Account Number"
                          />
                        )}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Branch Name"
                      validateStatus={errors.bank_branch ? 'error' : ''}
                      help={errors.bank_branch?.message}
                    >
                      <Controller
                        name="bank_branch"
                        control={control}
                        render={({ field }) => (
                          <Input {...field} placeholder="Enter Branch Name" />
                        )}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isSubmitting || isFetching}
                  disabled={!isDirty || loading || isFetching}
                >
                  {createBankMutation.isPending ? 'Updating...' : 'Submit'}
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
