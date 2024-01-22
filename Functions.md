# IFFE

```
(function (n) {
  return n * 10;
})(10);

```

used by library author
variables will not leak

need not worry about finction name--name space or name clash

webpack and babel automatically convert function to iffe

# ananymous arrow iffe

```
((n) => {
  console.log("arrow");
  console.log(n * 10);
})(2);
```

## for in is used with both objects and array

## for of is used wkth only array
