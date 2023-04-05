## Membuat Server

1. HTTP Module memiliki banyak objek, properti, atau method yang berguna dalam pembuatan server. Contoh yang paling penting yaitu penggunaan **http.createServer()**.
   Penggunaanya

```
const requestListener = (request, response) => {

};

const server = http.createServer(requestListener);
```

2. Dalam setiap penggunaaan method **http.createServer()**, maka penggunaan method **listener** digunakan. Moethod ;istener menerima 4 buah parameter, yaitu : port, histname, backlog, listeninglistener.

3. Contoh dapat dilihat di file server.js

## METHOD /VERB REQUEST
