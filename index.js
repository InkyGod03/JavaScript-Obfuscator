const fs = require('fs')
const JSObfuscator = require('javascript-obfuscator')

const start = async() => {
	console.log('Encriptando codigo...')
	try {
		const code = String(fs.readFileSync('./code.js'))
		await fs.writeFileSync('./code.js', await JSObfuscator.obfuscate(code).getObfuscatedCode())
		console.log('Codigo encriptado exitosamente.')
	} catch (e) {
		console.log(e)
	}
}

start()
