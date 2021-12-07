const geoip = require('fast-geoip')


const locale = async (ip) =>{

const geo = await geoip.lookup(ip)

console.log(ip,geo)

}


Promise.all([
	locale("207.97.117.132"),
	locale("31.182.212.45")
])


