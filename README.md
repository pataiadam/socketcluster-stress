# socketcluster-stress


```
git clone https://github.com/pataiadam/socketcluster-stress.git
cd socketcluster-stress
npm i
WSE=ws node server.js
```

Open another terminal

```
node client.js
```

After few seconds, you should see something like this:

```
==================
|=|  TC/MC: 1000/1000
|=|  msgPublished: 49753
|=|  msgReceived: 48986
|=|  msg/sec: 11671.670240648082
==================
```

, where  
**TC/MC**: connected clients/max clients  
**msgPublished**: total number of emitted messages  
**msgReceived**: total number of received messages  
**msg/sec**: received messages/second  

Kill the processes (server, client). Now, try to start with uws engine:

```
WSE=uws node server.js
#another terminal:
node client.js
```

Now you should see this:

```
==================
|=|  TC/MC: 1000/1000
|=|  msgPublished: 241000
|=|  msgReceived: 115509
|=|  msg/sec: 5082.6806301152865
==================
```

With `uws` we got ~5000 msg/sec, but when we use `ws` the number is >11000 msg/sec.