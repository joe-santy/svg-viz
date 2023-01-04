// js.js
// This object stores random functions and variables and such

const js = {
  // vectorMathFunction doubles a digit.  If the result has two digits, it adds them together.  The resulting digit is returned.
  vectorMathFunction : (digit) => {
    let dub = String(Number(digit)*2);
    return dub.length === 1 ? Number(dub) : Number(dub[0]) + Number(dub[1]);
  },
  // fibFunction creates a Fibonacci sequence.  The first argument is the length of the sequence.
  // The last two arguments optionally give the first two numbers of the sequence.
  fibFunction : (fibSeqLength = 3 ,num1 = 1, num2 = 1) => {
    let seq = [num1, num2];
    while (seq.length < fibSeqLength) {
      seq.push(seq[seq.length-1] + seq[seq.length-2]);
    }
    return seq;
  }
}
