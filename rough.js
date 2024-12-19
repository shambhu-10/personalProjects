function minLifeboats(weights, n, k) {
    weights.sort((a, b) => a - b);  // Sort the weights in ascending order
    let count = 0;
    let l = 0;
    let r = n - 1;
  
    while (l <= r) {
      let sum = weights[l] + weights[r] 
      if (sum <= k) {
        count++;
        l++;
        r--;
      }
      else{
      count++; 
      r--;
      }
    }
  
    console.log(count);
  }