exports.useFetch = async (url, method, payload) => {
  try {
    const header = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }

    const response = await fetch(url, header);
    const data = await response.json();

    return data;
  } catch (error) {
    return { status: 'failure', payload: error };
  }
}