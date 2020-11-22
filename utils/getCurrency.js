import axios from 'axios'

const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

export default async function getCurrency() {
  const data = await axios.get(url)
    .then(function (response) {
      // handle success
      const responseData = response.data
      const USD = responseData.filter( i => i.cc === 'USD')
      return Number(USD[0].rate.toFixed(2))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    return data
}

