import { fetchApi } from '../../config/api-service';

export const fetchApiData = async ({ apiUrl, apiMethod, payload, flag }) => {
  let data;
  try {
    const apiResponse = await fetchApi({
      apiUrl,
      apiMethod,
      payload,
      flag
    });
    if (apiResponse.status === 200) data = apiResponse?.data;
  } catch (error) {
    data = error?.response;
  }
  return data;
};

export const setSessionStorage = (key, value) => {
  return sessionStorage.setItem(key, value);
};

export const getSessionStorage = (key) => {
  return sessionStorage.getItem(key);
};
