export default function formatNumber(x) {
  if (x === undefined) {
    return 0
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}