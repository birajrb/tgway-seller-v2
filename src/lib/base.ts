// import { readLocalStorage } from '@/lib/utils';

interface BaseRequestOptions {
  url: string;
  method?: string;
  body?: any;
  options?: any;
  signal?: AbortSignal;
  contentType?: string;
}

const baseRequest = async ({
  url,
  method = 'GET',
  body = null,
  options,
  signal,
  contentType,
}: BaseRequestOptions): Promise<any> => {
  const headers: HeadersInit = {
    // Authorization: `Bearer ${readLocalStorage('app-auth')}`,
    Accept: 'application/json',
  };

  if (contentType) {
    headers['Content-Type'] = contentType;
  }

  const requestOptions: RequestInit = {
    method,
    headers,
    ...options,
  };

  if (body) {
    requestOptions.body = body;
  }

  if (signal) {
    requestOptions.signal = signal;
  }

  const res = await fetch(
    `${import.meta.env.VITE_APP_SERVER_URL}${url}`,
    requestOptions,
  );

  const response = await res.json();

  return response;
};

export { baseRequest };
