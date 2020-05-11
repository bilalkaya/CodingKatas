function printerError(s) {
  let errors = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > 'm' || s[i] < 'a') {
      errors++;
    }
  }
  return errors + '/' + s.length;
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));
