function encrypt(word){
  let w = word.toLowerCase();
      a = "murcielago",
      b = [0,1,2,3,4,5,6,7,8,9],
      letters = w.split('');
  return (letters.map(element => a.includes(element) ?  b[a.indexOf(element)] : element)).join("");
}
