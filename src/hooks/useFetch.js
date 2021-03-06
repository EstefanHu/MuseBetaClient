const useFetch = async (url, method, body) => {
  try {
    const token = await localStorage.getItem('token');
    const bodyIsFormData = body instanceof FormData;
    const params = { method }

    method === 'GET' ? params.headers = {}
      : params.headers = {
        Accept: 'application/json',
        'Content-Type': bodyIsFormData ?
          'multipart/form-data' :
          'application/json',
      }
    if (token) params.headers.Authorization = `Bearer ${token}`;
    if (body) params.body = bodyIsFormData ? body : JSON.stringify(body);

    const response = await fetch(url, params);
    const data = await response.json();

    // console.log(data)

    return data;
  } catch (error) {
    return { status: 'failure', payload: error };
  }
};

export { useFetch };