const axios = require('axios');
const qs = require('qs');
const fs = require('fs');
// http://sandbox.indo-sakti.co.id:3180/info-skw/
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

async function saveData() {
    let data = []
    for (let i = 101000; i < 101999; i++) {
        console.log(`0${i}`)
        let pelanggan = await getData(`0${i}`)
        if (pelanggan != null) {
            console.log(pelanggan)
            data.push(pelanggan)
        }

    }

    fs.writeFileSync('./data/pdam-0101000.json', JSON.stringify(data, null, 4));
    console.log(data.length)
    console.log("selesai")
    return
    
}
saveData()
