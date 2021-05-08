export function gigasecond(date) {
    let milliseconds = date.getTime(); 
      let endDate = new Date(milliseconds + Math.pow(10, 9) * Math.pow(10,3));
    // console.log(new Date(milliseconds + Math.pow(10, 9) * Math.pow(10,3)));
      return endDate;
  }