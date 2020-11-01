import formatNumber from './formatNumber'

export default function getPriceSrt(x) {
  if (x.length === 1) {
    return formatNumber(x[0])
  }

  return ( `${formatNumber(x[0])} ... ${formatNumber(x[x.length - 1])}`)
}