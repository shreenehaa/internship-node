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
