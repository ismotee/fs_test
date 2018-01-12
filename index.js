var fs = require('fs');

fs.writeFileSync("foo.txt","bar");

if(!fs.existsSync("foo_link")) {
    fs.symlinkSync("foo.txt", "foo_link");
}