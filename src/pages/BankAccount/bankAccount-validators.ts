import { z } from 'zod';

export const BankAccountValidators = z.object({
  bank_name: z.string().min(1, { message: 'Bank Name is Required' }),
  account_number: z.string().min(1, { message: 'Account Number is Required' }),
  account_name: z.string().min(1, { message: 'Account Name or Vat Number is Required' }),
  bank_branch: z.string().min(1, { message: 'Branch is required' }),

});

export type TBankAccountValidators = z.infer<typeof BankAccountValidators>;
