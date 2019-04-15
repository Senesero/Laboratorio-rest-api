const ajax = (method, url, args) => (
    new Promise((resolve, reject) => {
        const client = new XMLHttpRequest();
        let uri = url;

        client.open(method, uri);

        if (method === 'POST') {
            client.setRequestHeader('X-Request-With', 'XMLHttpRequest')
            client.setRequestHeader('Content-Type', 'application/x-www-form-urlencode')
        }

        client.onload = (event) => {
            resolve(event.target.responseText);
        }

        client.onerror = (event) => {
            reject(event.target.statusText);
        }

        if (method === 'POST') {
            client.send(JSON.stringify(args))
        } else {
            client.send()
        }
    })
);

export default {
    'get': (url, args) => ajax('GET', url, args),
    'post': (url, args) => ajax('POST', url, args),
}