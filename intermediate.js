/* ---------- EXO 1 ---------- */

/* We ask to read a sentence, which ends with a point, character by character and to determine:
  The length of the sentence (the number of characters).
  The number of words in the sentence (assuming that the words are separated by a single space).
  The number of vowels in the sentence.
*/

const sentence = "Hello my name is Seifeddine and I am a web developer.";

console.log(sentence.length);
const words = sentence.split(" ");
console.log(words.length);

// The number of vowels in the sentence.
function countVowels(sentence) {
  var vowel_list = "aeiouAEIOU";
  var vcount = 0;

  for (var i = 0; i < sentence.length; i++) {
    if (vowel_list.indexOf(sentence[i]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
console.log(
  countVowels("Hello my name is Seifeddine and I am a web developer.")
);

/* ---------- EXO 2 ---------- */
function bestFormula(nbKms, nbDays) {
  const r1 = 0.7,
    r2 = 0.4,
    r3 = 0.2,
    p_d = 10,
    ins = 0.3,
    tva = 0.18;

  // Formula 1 (Per Km)
  let formula1;
  if (nbKms <= 100) {
    formula1 = r1 * nbKms + ins + tva;
  } else if (nbKms > 100 && nbKms <= 1000) {
    formula1 = r2 * nbKms + ins + tva;
  } else {
    formula1 = r3 * nbKms + ins + tva;
  }

  console.log(formula1);

  // Formula 2 (Per Days)
  formula2 = p_d * nbDays + ins + tva;
  console.log(formula2);

  // Best Option
  let best = Math.min(formula1, formula2);

  return best;
}

let bestOption = bestFormula(100, 3);
console.log("The price is " + bestOption);

/* ---------- EXO 3 ---------- */

/* ---------- EXO 4 ---------- */
