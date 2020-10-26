export default function sumTheArray(ar, initial=0) {
  return ar.reduce((acc, cur)=> acc + Number(cur), initial)
}