function checkCashRegister(price, cash, cid) {
  let c = cash - price;
  let d = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let ts = 0;
  let e = 0;
  let ps = 0;
  let g = [];

  for (let i = 0; i < cid.length; i++) {
    ts = Number((ts + cid[i][1]).toFixed(2));
  }

  for (let i = 0; i < d.length; i++) {
    if (c >= d[i]) {
      e = i;
    }
    else {
      break;
    }
  };


  for (let i = e; i >= 0; i--) {
    ps = Number((ps + cid[i][1]).toFixed(2));
  }


  if (ps < c) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else if (ts == c) {
    return {status: "CLOSED", change: cid};
  }
  else {
    for (let i = e; i >= 0; i--) {
      if (cid[i][1] == 0 || Math.floor(c/d[i])*d[i] == 0) {
        continue;
      }
      else if (c == cid[i][1]) {
        g.push([cid[i][0], cid[i][1]]);
        return {status: "OPEN", change: g};
      }
      else if (cid[i][1] < c) {
        g.push([cid[i][0], cid[i][1]]);
        c -= cid[i][1];
        continue;
      }
      else if (cid[i][1] > c) {
        g.push([cid[i][0], Math.floor(c/d[i])*d[i]]);
        c  = Number((c - Math.floor(c/d[i])*d[i]).toFixed(2));
        if (c == 0) {
          return {status: "OPEN", change: g};
        }
      }
    }
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

}

console.log(checkCashRegister(19.5, 300, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
