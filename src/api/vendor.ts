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
export { getBankDetail, getDashboardOrders };
