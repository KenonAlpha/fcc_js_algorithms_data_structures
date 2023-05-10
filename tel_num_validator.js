function telephoneCheck(str) {
  let a = /(^(1\s|1)?|^)([0-9]{3}[\s-]{1}[0-9]{3}[\s-]{1}[0-9]{4}$|[0-9]{10}$|[(][0-9]{3}[)]\s?[0-9]{3}[\s-]{1}[0-9]{4}$)/;
  if (a.test(str)) {
  return true;}
  else {
    return false;
  }
}

console.log(telephoneCheck("1(555)555-5555"));
