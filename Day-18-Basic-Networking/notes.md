# 1. Introduction to Computer Networks:

## Internet : 
        In a nutshell, Internet is a network of computer networks. 
        complex web of interconnected computer networks
    
### What is Network?
-> It is a group or system of interconnected people or items.

Computer Networks: Computers connected with each-other with cables or wireless is called computer networks.
### why do need computer network? 
 -> We want to share resources and  do communications between computers.


 # 2. History of Internet

 * In 1957 -> sovient union launched Sputnik 

 * then US goverment launched ARPA(Advanced research project agency).

 * around 1960's to 1970's, ARPA build acommunication system for ARPA's computer to talk.

 * In 1969, The ARPANET born.

 * 1980's, they migrating everything into TCP/IP. i.e. INTERNET.

 * Around 1990's, CERN researcher used to use hyperlink based document.
 * IN 1990, Tim bernerlea introduce www(world wide web). then browser came like MOSAICS, NETSCAPE.


 # 3. Terminologies in computer Networks:

 ## Network Protocols: 
        Network Protocols are a Set of rules and regulations setup to communicate and share Information over a Network.
    example : http, UDP, TCP, SMTP etc.

 ## Packets: 
    In order to share data, we can't send big chunk of data over the network.So we divide the datat in smaller chunks, these small chunks are called as packets.

## Address: 
        Sending messages over the network requires the destination details. this details uniquely identified the end system is called as Address.

## Ports: 
        Any machines could be running many network applications, In order to distinguish these apps for recieving messages we use ports(port number).

        * IP address + port => socket (combination of IP address and port number is called is Socket.)

        * Port helps you get the packets to specific process on the host.

        * Every process has 16 bit port number. 0 - 2^16 (65535) (range of port numbers)
            0 - 1023 -> Well known ports(reserved ports).       (most used)
                        `80` belongs to http
                        `443` belongs to https
            
            1024 - 49152 -> Registered Ports (they are used by specific, potentially proprities apps/process 
                            that are known but bot system defined.)
                            `1433` - sql server
                            `27017` - mongodb compass

            49153 - 65535 -> Dynamic ports ( For future purpose and end user can also use it.)


# 4. Access Network:
    These are media using which end systems connect to the internet.

## Network Interface Adapter: 
                It enables a computer to attach to a network. as there are different type of networks,  It acts as single suits to connect to any network.

## DSL(Digigtal Subscriber Line): 
        DSL uses the existing Telephone ground work lines for Internet connection. Generally DSL is provided by same company which supplies telephone service.

## ISP(Internet Service provider): 
        It is just a company that provides end user Internet. example: AT&T.


# 5. Network Protocol Stack: 

Two Major Standards Protocol:

1. OSI (7 layer)
2. TCP/IP (5 layer)

### OSI Model: 

Application
Presentation
Session
Transport
Network
Data Link
Phyical

### TCP/IP Model: 
    Application: It combines Application + Presentation + Session layer of OSI Model.
    Transport
    Network
    Data link
    Physical

    Application Layer : Email service, chat service.
    Presentation Layer: Presentation of data, Compression, Encryption to be done.
    Session Layer: User Session management.

    These three layer are generally present in end device only.

    Transport layer: Divides big chunk of data to small chunks and manage these chunks.
    Network Layer: It handles How routing of packets will be done on the network.
    DataLink Layer: It is generally for error/flow control, Multiplexing and de-multiplexing and handles address.
    Physical Layer: data actually comes in elecronics form and


# 6. Application Layer:

Roles:
    1. Writing/providing data off to the network.
    2. Reading the data from user.
    3. Contains applications that helps users to interact on the network.
    4. Error Handling and recovery can also be done.

Where application Layer Exists:
- It exists on End Sytsem only.

these are integrated using Application Layer: 
- Instant Messaging
- www
- VOIP
- Email based protocol

# 7. Details about Application Layer

## Client Server Architecture: 
- It is two level architecture: 
  1. Client Side     (Frontend where user Interact.)                                 
  2. Server Side

Servers -> This process controls access to a centeralized resource or service such as a website/webapp.
                     request-->
             client -------------> server
                        <--response

## P2P architecture: (peer to peer): 
        every end system is capable of sharing the resources.
        torrent is example of p2p.

## Hybrid Architecture: 
        Combination of Client-server and P2P.


# 8. HTTP (Hyper-Text Transfer Protocol):

## Hyper-text : a document whichahve another document linked with it.

### Objects: 
        - Webpages are the main objects that contains other objects.
        - some other objects can be mp3 file, png, jpg etc.
        - Every objects has a URL.

## URL (Uniform resource Locator):
        URL has Multiple Parts:
        - Protocol
        - HostName
        - Location of file/object
        - more Arguments

        example: 

        http://flipkart.com/image/23.jpg?q=50

        - Protocol : http
        - HostName: flipkart.com
        - Location of file/object:  image/23.jpg
        - more Arguments :  ?q=50



## http:
 It defines whole procedure on how client and server will interact.

 - http is sateless protocol(servers don't store any information about the client.)

 So, A lot of application layer protocols depend on lower level protocols of trnasport layer.
 * In transport layer there are 2 main protocols
        1. TCP
        2. UDP
- HTTP depends on TCP.
- There are 2 types of HTTP connections
        1. persistent HTTP
        2. Non-persistent HTTP
# 10. HTTP MEthods:

## Http req and res Methods:
HTTP REQ Message:
Any http message are plain ASCII text.
 - host, method, statuscode, reffers-policy ......

 





 











