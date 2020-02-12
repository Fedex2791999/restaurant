module.exports = {
  booking:  (element, array) =>{
    let check = 1;
      array.forEach((data,index) =>{
        if(element.date === data.date && element.time === data.time && element.table === data.table) check = 0;
        if (element.phone === data.phone && element.time === data.time && element.date === data.date) check = -1;

      })
      return check;
  },
  bar: function () {
  
  }
};
