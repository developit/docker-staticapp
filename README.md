docker-staticapp
================

[![Greenkeeper badge](https://badges.greenkeeper.io/developit/docker-staticapp.svg)](https://greenkeeper.io/)
A docker container for hosting a static website using Node.JS + express, with a nifty environment variable proxy.  

- Build/run this container to host files from `/src/staticapp/public` (map it as a volume if you want)  
- Listens on the port specified as a `PORT` env var (`process.env.PORT`, the default is `8080`).  
