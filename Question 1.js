process.stdin.setEncoding('utf-8');

process.stdin.on('data', data => {
	
	// Remove '\r' and '\n' from the end.
	data = data.slice(0, -2);

	if (data === `exit`) {
		process.stdout.write('User Input Ended!');
		process.exit();
	}
	process.stdout.write(
		`${data
			.split('')
			.reverse()
			.join('')}\n`
	);
});