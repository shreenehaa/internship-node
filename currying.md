# Currying

## what is currying?

    Currying is a technique to transforms a function of multiple arguments to several functions of single argument in sequence.
    i.e sum(1,2,3) => sum(1)(2)(3)

## Why currying is necessary?

- Divide the function into multiple smaller function that can handle one responsibility
- create higher order function
- write code that can be resued

## Challenges in having many arguments

- Readability
- order dependency
- complexity

## How does it work?

closure makes it possible for the inner function to access the outer function variable

## Example

### Normal function

```
var sum=(a,b,c) => return a+b+c;

console.log(sum(1,2,3));
```

### Curried function

```
var sum=(a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
};
sum(1)(2)(3)
```

In this example,instead of taking all the parameters one at a time it takes first parameter and returns a new function which takes the second one and returns a new function which takes third parameter and returns the sum.

# http

HTTP is an application protocol (layer 7 OSI and layer 4 TCP/IP) to enable communication between clients and servers over the Internet.

## Evolution of http

- version 0.9
- version 1.0
- version 1.1
- version 2
- version 3

### version 0.9

The TCP connection gets terminated immedietly after the response

It supports only the GET method

### Version 1.0

HTTP Version 1.0 was released in 1996 about five years after the release of 0.9

Other than GET , It supports POST and HEAD

Connection is not lost for 6 data request-response

### Version 1.1

More than one request can be sent at a time but there is a problem of head of line blocking.

#### Head of line blocking

when there are more than one requests for example three were made ,eventhough the response for the third request is ready it has to wait because the first request is still processing.This is known as head of line blocking.

the order of response has to be maintained.

### version 2

It was introduced in 2015

The order of the response need not be maintained

Head of line blocking is overcome by introducing multiplexing but there is other challenge

Here streams of different data are divided into packets when a packet of one stream goes missing then all the other packets needs to be wait untl the retransmision

### Version 3

The main difference between version 2 and 3 is version 2 uses TCP protocol whereas version 3 is built over QUIC UDP.

QUIC UDP sends the packets of respective streams seperatly over a broder connection.

generally streams are identified by stream id,odd id for client initialted stream and even for server initiated stream

so whenever a packet is lost ,that particular stream will be retransmitted because other streams flow independently.

They have built in multiplexing

# Parameter vs Arguments

## Parameter

The variables that are defined when the function is declared are known as a parameter

These are also known as formal parameters

```
function add(x, y){
	return x + y
}
```

## Arguments

The values that are declared within a function when the function is called are known as an argument.

Tt is also known as Actual arguments

```
add(2, 3)
```
