const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");


function parseFile(input, output) {
    const ffCom = ffmpeg();
    ffCom.addInput(input).noVideo().audioBitrate("128k").audioChannels(2).save(output);
}

module.exports = {
    parseFile: parseFile
};