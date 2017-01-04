const commander = require("commander");

commander
    .version("0.0.0")
    .option("-f", "--file", "Parse a single file.")
    .option("-d", "--directory", "Parse an entire directory of mp4 files")
    .option("-o", "--output", "Specify a directory to output the mp4. Defaults to the input location")
    .parse(process.argv);

