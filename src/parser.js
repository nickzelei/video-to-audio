const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");


function parseFile(input) {
    if (input.indexOf(".mp4") === -1) {
        throw new Error("Can only parse .mp4 files");
    }
    const parsedPath = path.parse(input);
    const output = path.join(parsedPath.dir, `${parsedPath.name}.mp3`);

    const ffCom = ffmpeg();
    ffCom.addInput(input).noVideo().audioBitrate("128k").audioChannels(2).save(output);
}

function parseDirectory(input) {
    fs.readdir(input, (err, files) => {
        files.filter(file => file.indexOf(".mp4") > -1).map(parseFile);
    });
}

module.exports = {
    parseFile,
    parseDirectory
};