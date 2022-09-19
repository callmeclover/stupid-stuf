// declare en/decoders
const en = new TextEncoder;
const de = new TextDecoder;
// do... stuff.
let y = prompt("What to do?")
if (y == "decode") {
    let z = prompt("what to decode?")
  let b = de.decode(z)
    alert(b)
} else if (y == "encode") {
    let x = prompt("what to encode?")
    let b = en.encode(x)
alert(b)
}
