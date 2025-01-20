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
  method = "GET",
  body = null,
  options,
  signal,
  contentType,
}: BaseRequestOptions): Promise<any> => {
  const headers: HeadersInit = {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkbWluLnRnd2F5b24uYmFuaWwuY29tLm5wL2FwaS9zZWxsZXIvbG9naW4iLCJpYXQiOjE3MzcyNzA1OTUsImV4cCI6MTczODU2NjU5NSwibmJmIjoxNzM3MjcwNTk1LCJqdGkiOiI5RlowTTZCSnNjRTQxVTFIIiwic3ViIjoiNzYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.RKQLhRSE1pv8cxGmIHNpSl4UCqw5NiQ-Er_w9OaEcKg`,
    Accept: "application/json",
  };

  if (contentType) {
    headers["Content-Type"] = contentType;
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
    requestOptions
  );

  const response = await res.json();

  return response;
};

export { baseRequest };
