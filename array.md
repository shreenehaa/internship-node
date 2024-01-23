# array functions

```
a = [1, 2, 3, 4, 5];
a.reverse();
```

```
a.includes("hi");
//  return boolean

```

```
a.join("-");
console.log(cart);
a.join();
// default seperator is comma
```

```
a.split()
```

```
a.slice(1, 3);
it gives 1 and 2 index elements
```

// everey is higher order function
similar to AND operator
if there is one false it will return false

```
a.some(p=p>=90)
```

it takes function as argument and forces to return only true r fals

### unshift

add the element in front

# immutability

- Spread operator
- concat

# Const

array-elements can be changed

`t1.push(70)-mutable`

# optional chaining

```
console.log(person?.place?.)
```

to improve developer experience

to avoid defencive code

### map function

```
const nums = [2, 4, 6];
const output = nums.map((n) => n * 2);
console.log(output);
console.log(nums);
```

## obsevations of map

- returns copy of array //
- length of both array will be same
- transforms datatype

## Inline function of map

```
const avengers = ["hulk", "black widow", "thor"];
const ans = avengers.map((n) => n.length);
console.log(ans);

```

## to make resusable use function seperately

```
const getLength = (n) => n.length;
const avengers1 = ["hulk", "black widow", "thor"];
const ans1 = avengers.map(getLength);
console.log(ans);

```

## Filter

- returns copy of array
- length will be less than or equal
- do not change the data type

## predicate function

function which returns boolean

HOF accepts the predicate function

## boxing

- string converted to string object
- number converted to number object so cannot use the the length ,etc... functions

## Imperative vs declarative

- imperative --> kids -->how to do?-->have more ceremonial code
- declarative --> what to do ?

## immutable friendly

creates a new copy of array and use it

toreverse
to sorted
tosplice

### .flat(infinity)=>makes the array single removes nested arrays
