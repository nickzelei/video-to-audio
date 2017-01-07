#!/usr/bin/env node
const commander = require("commander");
const parser = require("./src/parser");

commander
    .version("0.0.0")
    .option("-f, --file [file]", "Parse a single file.")
    .option("-d, --directory [directory]", "Parse an entire directory of mp4 files")
    .parse(process.argv);

if (commander.file) {
    parser.parseFile(commander.file);
} else if (commander.directory) {
    parser.parseDirectory(commander.directory);
}
