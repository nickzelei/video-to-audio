#!/usr/bin/env node
const commander = require("commander");
const parser = require("./parser");

commander
    .version("0.0.0")
    .option("-f, --file [file]", "Parse a single file.")
    .option("-d, --directory", "Parse an entire directory of mp4 files")
    .option("-o, --output", "Specify a directory to output the mp4. Defaults to the input location")
    .parse(process.argv);

if (commander.file) {
    throw new Error("Not yet implemented");
}

if (commander.directory) {
    throw new Error("Not yet implemented");
}
