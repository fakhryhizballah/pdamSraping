// var request = require('request');
// var options = {
//     'method': 'POST',
//     'url': 'https://pdamgunungpoteng.com/site/jsonPelanggan',
//     'headers': {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     form: {
//         'id_pelanggan': '1201275'
//     }
// };
// request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
// });
const axios = require('axios');
const qs = require('qs');
const fs = require('fs');



async function getData(id_pelanggan) {
    let data = qs.stringify({
        'id_pelanggan': id_pelanggan
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://pdamgunungpoteng.com/site/jsonPelanggan',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };

    let response = await axios.request(config)
    return response.data

}
// console.log(getData('0201275'))
// console.log(getData('0201000'))

async function saveData() {
    let data = []
    for (let i = 202000; i < 202999; i++) {
       console.log(`0${i}`)
        let pelanggan = await getData(`0${i}`)
        if (pelanggan != null) {

            // fs.writeFileSync('data.json', JSON.stringify(data));
            console.log(pelanggan)
            data.push(pelanggan)
        }
    
    }
    // let pelanggan = await getData('0201275')
  
    fs.writeFileSync('pdam-0202999.json', JSON.stringify(data, null, 4));

    // fs.writeFileSync('data.json', JSON.stringify(data));
    
}
saveData()

