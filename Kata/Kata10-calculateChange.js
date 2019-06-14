const calculateChange = (total, cash) => {
  let change = cash - total;
  let ansArr = "";
  twentyDollar = Math.floor(change / 2000);
  if (twentyDollar) {
    change = change % 2000;
    ansArr = "twentyDollar: " + twentyDollar;
    if (change) {
      ansArr += ", ";
    }
  }
  tenDollar = Math.floor(change / 1000);
  if (tenDollar) {
    change = change % 1000;
    ansArr = ansArr + "tenDollar: " + tenDollar;
    if (change) {
      ansArr += ", ";
    }
  }
  fiveDollar = Math.floor(change / 500);
  if (fiveDollar) {
    change = change % 500;
    ansArr = ansArr + "fiveDollar: " + fiveDollar;
    if (change) {
      ansArr += ", ";
    }
  }
  twoDollar = Math.floor(change / 200);
  if (twoDollar) {
    change = change % 200;
    ansArr = ansArr + "twoDollar: " + twoDollar;
    if (change) {
      ansArr += ", ";
    }
  }
  oneDollar = Math.floor(change / 100);
  if (oneDollar) {
    change = change % 100;
    ansArr = ansArr + "oneDollar: " + oneDollar;
    if (change) {
      ansArr += ", ";
    }
  }
  quarter = Math.floor(change / 25);
  if (quarter) {
    change = change % 25;
    ansArr = ansArr + "quarter: " + quarter
    if (change) {
      ansArr += ", ";
    };
  }
  dime = Math.floor(change / 10);
  if (dime) {
    change = change % 10;
    ansArr = ansArr + "dime: " + dime;
    if (change) {
      ansArr += ", ";
    }
  }
  nickel = Math.floor(change / 5);
  if (nickel) {
    change = change % 5;
    ansArr = ansArr + "nickel: " + nickel;
    if (change) {
      ansArr += ", ";
    }
  }
  penny = Math.floor(change / 1);
  if (penny) {
    change = change % 1;
    ansArr = ansArr + "penny: " + penny;
  }

  return ansArr;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));