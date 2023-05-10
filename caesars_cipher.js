function rot13(str) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ciphe = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let deciph = ""
  let cond = /[A-Z]/;
  for (let i = 0; i < str.length; i++) {
    if (cond.test(str[i])) {
      deciph = deciph.concat(alpha[ciphe.indexOf(str[i])])
    }
    else {
      deciph = deciph.concat(str[i]);
    }
  }
  return deciph;
}
