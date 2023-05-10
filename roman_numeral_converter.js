function convertToRoman(num) {
  let ronum = "";
  let aux = [0, 0, 0, 0];

  if (num.toString().length == 4) {
    aux[0] = Number((num.toString()[0]));
    aux[1] = Number((num.toString()[1]));
    aux[2] = Number((num.toString()[2]));
    aux[3] = Number((num.toString()[3]));
  }
  else if (num.toString().length == 3) {
    aux[1] = Number((num.toString()[0]));
    aux[2] = Number((num.toString()[1]));
    aux[3] = Number((num.toString()[2]));
  }
  else if (num.toString().length == 2) {
    aux[2] = Number((num.toString()[0]));
    aux[3] = Number((num.toString()[1]));
  }
  else {
    aux[3] = Number((num.toString()[0]));
  }

  if (aux[0] > 0) {
    aux[0] = "M".repeat(aux[0]);
  }
if (aux[1] == 9) {
  aux[1] = "CM";
}
if (aux[1] < 9 && aux[1] >= 5) {
  aux[1] = "D" + "C".repeat(aux[1]-5);
}
if (aux[1] == 4) {
  aux[1] = "CD";
}
if (aux[1] < 4 && aux[1] >= 1) {
  aux[1] = "C".repeat(aux[1]);
}
if (aux[2] == 9) {
  aux[2] = "XC";
}
if (aux[2] < 9 && aux[2] >= 5) {
  aux[2] = "L" + "X".repeat(aux[2]-5);
}
if (aux[2] == 4) {
  aux[2] = "XL";
}
if (aux[2] < 4 && aux[2] >= 1) {
  aux[2] = "X".repeat(aux[2]);
}

if (aux[3] == 9) {
  aux[3] = "IX";
}
if (aux[3] < 9 && aux[3] >= 5) {
  aux[3] = "V" + "I".repeat(aux[3]-5);

}
if (aux[3] == 4) {
  aux[3] = "IV";
}
if (aux[3] < 4 && aux[3] >= 1) {
  aux[3] = "I".repeat(aux[3]);
}
for (let i = 0; i < 4; i++) {
  if (aux[i] != 0) {
    ronum = ronum.concat(aux[i]);
  }
}
  return ronum;
}
