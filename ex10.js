// Ex10: Use ES6 feature to refactor the code
// console.log(person?.place?.city);
getUserSubscriptionInfo = (user) => {
  //   let plan, status;
  // console.log()
  //   if (user) {
  //     if (user.subscription) {
  //       if (user.subscription.plan) {
  //         plan = user.subscription.plan.name;
  //       }
  //       if (user.subscription.status) {
  //         status = user.subscription.status;
  //       }
  //     }
  //   }
  var plan = user?.subscription?.plan
    ? user?.subscription?.plan.name
    : "no plan";
  var status = user?.subscription?.status
    ? user?.subscription?.status
    : "Inactive";

  return { plan: plan || "No Plan", status: status || "Inactive" };
};

// Example user object
const user = {
  id: "123",
  name: "Alice",
  subscription: {
    plan: { name: "Premium" },
    status: "Active",
  },
};

getUserSubscriptionInfo1 = (user) => ({
  plan: user?.subscription?.plan ? user?.subscription?.plan.name : "No Plan",
  status: user?.subscription?.status ? user?.subscription?.status : "Inactive",
});

console.log(getUserSubscriptionInfo1(user));

getUserSubscriptionInfo = (user) => {
  var plan = user?.subscription?.plan.name || "No plan";
  var status = user?.subscription?.status || "Inactive";

  return { plan, status };
};
