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
        // .then((response) => {
        //     console.log(JSON.stringify(response.data));
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    console.log(response.data)
    return response.data

}
// console.log(getData('0201275'))
// console.log(getData('0201000'))

async function saveData() {
    let data = []
    for (let i = 101000; i < 101999; i++) {
       console.log(`0${i}`)
        let pelanggan = await getData(`0${i}`)
        if (pelanggan != null) {

            // fs.writeFileSync('data.json', JSON.stringify(data));
            data.push(pelanggan)
        }
    
    }
    // let pelanggan = await getData('0201275')
  
    fs.writeFileSync('0101000-010108.json', JSON.stringify(data, null, 4));

    // fs.writeFileSync('data.json', JSON.stringify(data));
    
}
saveData()

