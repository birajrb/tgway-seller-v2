/* eslint-disable import/prefer-default-export */
import { baseRequest } from '@/lib/base';

const getBankDetail = async () => {
  const response = await baseRequest({
    url: '/seller/payment-method',
    method: 'GET',
  });
  return response;
};
const getDashboardOrders = async () => {
  const response = await baseRequest({
    url: '/seller/dashboard/orderitems',
    method: 'GET',
  });
  return response;
};

const getDashboardContent = async () => {
  const response = await baseRequest({
    url: '/seller/dashboard',
    method: 'GET',
  });
  return response;
};

const getDashboardLatestProducts = async () => {
  const response = await baseRequest({
    url: '/seller/dashboard/latestProducts',
    method: 'GET',
  });
  return response;
};

const postBankDetail = async (body: any) => {
  const response = await baseRequest({
    url: '/seller/payment-method',
    method: 'POST',
    body,
    contentType: '',
  });

  return response;
};
// eslint-disable-next-line max-len
export { getBankDetail, getDashboardContent, getDashboardLatestProducts, getDashboardOrders, postBankDetail };
