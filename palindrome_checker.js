function palindrome(str) {
  const a = /[a-zA-Z0-9]/g;
  let b = str.match(a);
  for (let i = 0; i < b.length; i++) {
b[i] = b[i].toLowerCase();
  }
  let c = [...b];
c.reverse()
for (let i = 0; i<b.length; i++) {
  if (b[i] !== c[i]) {
    return false;
  }
}
  return true;
}
