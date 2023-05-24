const createCounter = (init) => {
  let resetValue = init;

  return {
    increment: function () {
      resetValue++;
      return resetValue;
    },
    decrement: function () {
      resetValue--;
      return resetValue;
    },
    reset: function () {
      resetValue = init;
      return resetValue;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
