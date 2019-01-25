function greet(name) {
  if (Array.isArray(name) == true) {
    let respone = "";
    let nameNew = [];
    if (check(name,",")) {
      name.forEach(el => {
        if(el.charAt(0) == "\"" && el.charAt(el.length-1) == "\""){
          nameNew.push(el.split('\"').join(''));
        }else if(el.includes(",")){
          let newsplit = el.split(",");
          newsplit.forEach(el => {
            nameNew.push(el.split(' ').join(''));
          });
        }else{
          nameNew.push(el);
        }
      });
    } else {
      nameNew = name;
    }
    let upperCase = nameNew.filter(function(el) {
      return el === el.toUpperCase();
    });
    let normal = nameNew.filter(function(el) {
      return el !== el.toUpperCase();
    });
    // console.log(nameNew);
    if (normal.length > 1) {
      // normal.forEach((el,index) => {
      //   normal[index]=unescape(el)
      // });
      if (normal.length == 2) {
        respone += "Hello, " + normal.join(" and ") + ".";
      } else {
        respone +=
          "Hello, " +
          normal.slice(0, normal.length - 1).join(", ") +
          ", and " +
          normal.slice(normal.length - 1) +
          ".";
      }
    }
    if (upperCase.length > 0) {
      // upperCase.forEach((el,index) => {
      //   upperCase[index]=unescape(el)
      // });
      if (upperCase.length == 1) {
        respone += " AND HELLO " + upperCase + "!";
      } else if (upperCase.length == 2) {
        respone += " AND HELLO, " + upperCase.join(" AND ") + "!.";
      } else {
        respone +=
          " AND HELLO, " +
          upperCase.slice(0, upperCase.length - 1).join(", ") +
          ", AND " +
          upperCase.slice(upperCase.length - 1) +
          ".";
      }
    }
    return respone;
  } else if (name === null) {
    return "Hello, my friend.";
  } else if (name === name.toUpperCase()) {
    return "HELLO " + name.toUpperCase() + "!";
  }
  return "Hello, " + name + ".";
}

function check(arr,str){
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].includes(str)){
      return true;
    }
  }
  return false;
}

module.exports = greet;
