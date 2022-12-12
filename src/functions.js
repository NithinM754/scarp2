export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';



export const increment = () => {
setCount(function (prevCount) {
      return (prevCount += 1);
    });
};

export const decrement = () => {
   setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
};