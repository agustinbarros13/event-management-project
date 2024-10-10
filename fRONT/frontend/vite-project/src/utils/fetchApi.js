export const fetchApi = async (endpoint, method = 'GET', body) => {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
    };

    const options = {
        method,
        headers,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`http://localhost:5009/api${endpoint}`, options);
    if (!response.ok) {
        throw new Error('API request failed');
    }

    return await response.json();
};
