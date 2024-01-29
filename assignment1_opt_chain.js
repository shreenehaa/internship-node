var user = [
  {
    address: "salem",
    contact: { ph: 987654321, email: "shree@gmail.com" },
  },
  {
    address: "chennai",
    contact: { ph: 987654321, email: "abc@gmail.com" },
  },
  {
    address: "erode",
    contact: { ph: 987654321 },
  },
];
function getUserEmail(user) {
  if (user && user.contact && user.contact.email) {
    return user.contact.email;
  } else {
    return "Email not provided";
  }
}

function getUserEmail1(user) {
  for (var item of user) {
    console.log(
      item?.contact?.email ? item?.contact?.email : "email not provided"
    );
  }
}
getUserEmail1(user);

var matrix = [
  [10, 20, 30],
  [40, 50, 60],
];

function getMatrixElement(matrix, row, col) {
  //   if (matrix && matrix[row] && matrix[row][col] !== undefined) {
  //     return matrix[row][col];
  //   }
  //   return "Element not found";
}

function getMatrixElement1(matrix, row, col) {
  console.log(matrix?.[row]?.[col] ? matrix[row][col] : "element not found");
}
console.log(getMatrixElement1(matrix, 0, 2));

const stock = [
  { inventory: { count: 1 }, name: "Product 1" },
  { inventory: { count: 9 }, name: "Product 2" },
  { inventory: { count: 8 }, name: "Product 3" },
  { inventory: { count: 3 }, name: "Product 4" },
  { inventory: { count: 0 }, name: "Product 5" },
];

function isProductInStock(stock) {
  for (var prod of stock) {
    console.log(
      prod?.inventory?.count ? "Product Available" : "Product not in stock"
    );
  }
}

isProductInStock(stock);

const company = {
  departments: [
    {
      name: "Marketing",
      manager: { name: "abc" },
    },
    {
      name: "Sales",
      manager: { name: "xyz" },
    },
    {
      name: "engineering",
      manager: { name: "hlo" },
    },
  ],
};

function getDepartmentManager(company, departmentName) {
  const department = company?.departments?.find(
    (dept) => dept.name === departmentName
  )?.manager?.name;
  return department || "Manager not found";
}
console.log(getDepartmentManager(company, "Engineering"));
