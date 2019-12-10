/*******************
 * Write a program which reads a string from standard
 * input reverses the string and writes it to the standard output.
 * a) The program should run in a stand-by mode and should not be
 *    terminated after reversing the first string. 
*/
process.stdin.setEncoding('utf-8');

process.stdin.on('data', data => {
	
	// Remove '\r' and '\n' from the end.
	data = data.slice(0, -2);

	if (data === `exit`) {
		process.stdout.write('User Input Ended!\n');
		process.exit();
	}
	process.stdout.write(
		`${data
			.split('')
			.reverse()
			.join('')}\n`
	);
});