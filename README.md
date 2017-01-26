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
|=|  msgPublished: 213000
|=|  msgReceived: 212932
|=|  P/R: 1.0003193507786523
|=|  msg/sec: 12832.640269993371
==================
```

, where  
**TC/MC**: connected clients/max clients  
**msgPublished**: total number of emitted messages  
**msgReceived**: total number of received messages  
**P/R**: emitted/received ratio (should be ~1.0)  
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
|=|  msgPublished: 219000
|=|  msgReceived: 103204
|=|  P/R: 2.1220107747761716
|=|  msg/sec: 5204.700186595391
==================
```

With `uws` we got ~5000 msg/sec, but when we use `ws` the number is >12000 msg/sec.
