# Intro to Mod 2 & the Internet


## Recap Phase 1:
Some of the things we Learned last Mod
* **Ruby** - An object oriented programming language
* **Objects** - how we represent real world concepts in code
* **Domain Modeling** - how objects relate to each other
* **SQL** - speak to databases
* **ORM** - a programming technique for converting data between incompatible type systems using object-oriented programming languages.
* **Active Record** - Type of ORM
* **CRUD** - CREATE, READ, UPDATE, DELETE




## Overview Of Phase 2:
By the end of this Mod you should be able to create a fullstack web application
* HTTP 
  * Request & Response
  * REST 

  * MVC
    - Models
    - Views
    - Controllers
  * ERB - embedded ruby
  * How RESTful routes map to CRUD actions 

Rails Helpers
  * Routes helpers
  * ActionView helpers
  * Generators

* HTML/CSS



## Introduction to the internet

* What is the internet?

  Internet - hardware
  Web - software


  * How is data sent over the internet?
  * TCP - Transmission Control Protocol -> how data gets sent
  * IP - Internet Protocol, IP Adress -> where
  * HTTP - HyperText Transfer Protocol - what kind of data
  * HTML - HyperText Markup Language

* How can I find out the IP address of www.google.com using a terminal command? What kind of server makes this lookup possible?
  * DNS (Domain Name System)
  * `nslookup`
  * https://iplocation.com/

  * What's the difference between static and dynamic websites? What are some of the benefits of a dynamic website?

  * https://en.wikipedia.org/wiki/ARPANET
  * https://en.wikipedia.org/wiki/Tim_Berners-Lee
  * http://info.cern.ch/hypertext/WWW/TheProject.html


* What is a server? What is a client?

* With a client and server, which makes the request? Which sends the response?

- client: sends request
- server: data is stored - sends respnose 

* What is the request / response cycle?
  - Anatomy of Request:
    - http verb (GET,POST, PATCH, DELETE) url
    - body
    - headers

  - Anatomy of Response:
    - status
    - body 
    - headers

  


* What is a HTTP request? Make a few, using at least two of these tools: Google Chrome, Postman, curl

* What are the parts of a HTTP request
  * Use a web browser to find the headers for an HTTP request. What do you think these headers do?
  * What is usually in the body of an HTTP _response_?
  * What is a HTTP status code? What do the codes 200, 404, 500, 503, 302, 422 and 418 mean?
    * https://http.cat/
  * Why do we use HTTP verbs? What is the difference between what GET, POST, PUT, PATCH, and DELETE requests do?
  * What is a URL? Which part of a URL is the scheme (protocol)? Where is the host? The port? The path? Query string?  What is the purpose of each of these parts? 
    * https://docs.google.com/presentation/d/1no3yw_Vw4hBzGDlsEDcubvFnowi-Exjg9FW_VJid_U0/edit#slide=id.g378a2b8862_0_5






https://www.google.com/search?

q => snoop+dogg
oq => snoo
aqs => chrome.0.69i59j46i433j69i57j0i433j46i433j46i175i199j0j0i433.5343j0j9
sourceid => chrome
ie => UTF-8