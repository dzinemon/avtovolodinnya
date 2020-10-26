import {
  TAX
} from '../hardcoded/hardcoded';

const taxToPayPension = (tax) => {
  if (tax < 346830) {
    return TAX[0] * tax / 100
  } else if ( 346830 <= tax && tax < 609580) {
    return TAX[1] * tax / 100
  } else if (tax >= 609580) {
    return TAX[2] * tax / 100
  }
}

export default function taxesToPay(priceWithTax) {
  if (priceWithTax === undefined) {
    return 0
  }
  const taxFreePrice =  (priceWithTax - (priceWithTax * 20 / (100 + 20))).toFixed(0)
  return Number((taxToPayPension(taxFreePrice)).toFixed(0))
}