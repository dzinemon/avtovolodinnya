import formatNumber from './formatNumber'

export default function getArrayToStr(x) {

  if (x.length === 1) {
    console.log(x.length === 1);
    return (`${formatNumber(x[0])}`)
  }

  if (x[0] < x[x.length - 1]) {
    return ( `${formatNumber(x[0])} ... ${formatNumber(x[x.length - 1])}`) 
  } else {
    return (`${formatNumber(x[0])}`)
  }


}