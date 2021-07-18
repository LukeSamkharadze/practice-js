function pow(x, n) {
    if (n != 1) {
      console.log(`x: ${x}, n: ${n}`);
      
      var temp = x * pow(x, n - 1);

      console.log(`temp: ${temp}`);

      return temp;
    } else {
      return x;
    }
  }
  
  console.log( pow(2, 3) ); // 8