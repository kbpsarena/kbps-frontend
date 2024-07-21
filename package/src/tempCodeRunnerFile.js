const source = axios.CancelToken.source();
            const timeout = setTimeout(() => {
                source.cancel('Request timed out');
            }, 50000); // 5 seconds in milliseconds
            const response = await axios.post('http://localhost:8080/is-verified-user', { user_name : username, password : password }, 
                {
                headers: {
                  'Content-Type': 'application/json',
                },
                cancelToken: source.token,});
