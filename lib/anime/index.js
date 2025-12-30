const qs = require('querystring');
const http = require('https');

const options = {
	method: 'POST',
	hostname: 'anilistmikilior1v1.p.rapidapi.com',
	port: null,
	path: '/getAnimeList',
	headers: {
		'x-rapidapi-key': '8db6edbfe5mshea41217e0a09e3ep1adb62jsn7a6dc9423e0b',
		'x-rapidapi-host': 'Anilistmikilior1V1.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
        console.log(chunk)
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(qs.stringify({}));
req.end();

// CODE_CHALLENGE & CODE_VERIFIER
// dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
// CLIENT_ID
// 28196f163e5afa1384cda5979c696b71
// CLIENT_SECRET
// 83083adc12dd2069db55b39f09c1c12017f8d2a7104f79cd8b863880a428b5a6

// http://localhost:3000/?code=def5020077e97dbafd6941d87c707bc74220f446ea9da928117aa9baa06284e6a79209f153871b278fd421f8cfa73fa90ad2b07823e8ed2380cd6fbcc94c0ad8bca777561d27505689917f0140a553cb0c1a246f8bd63d3c4864cdecb5176bd02b0f2a75ea8deaa1529d0e7c82a7badd46746180272f265080d46c8edb68b9f18ff036d9f39fd52e0f484e24276122698091ef1642677dfeed04283263b1a02fc16a4d0f11ec06302c199c5c0643d3d3a56f0802d554dcb7b46dddc102707f7c220f3fcb741c4f57a040286f81957f64993f17922356d2a81cdb52aa24d140d6d99ad6278ac390d644759b5cd1f29a1f324876038df791a035bc5072ee8337ca73162a03859e4a3ed31429220164d90c9db6d497550370b4e855f0463aa0a3735acaefcded4aa6486ae7a279d4081f4e9d6102caaf7c1c661fe9890423947f3ccc7c8e5848c174529e53cc62809f31d4218a58e80bef0528d184e0491c4e62b9676d12bc5bef380dc1cc91dca02cb928f2a238eb1fca9f07d12aa1b12a5f55492ae330812c7628db5efbf75e227e846b72449da8d011a17b3d38c474e53514db6a9b2659cbc68994fb&state=randomInitialState1123