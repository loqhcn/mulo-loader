const compiler = require('mulo-loader-compiler')
module.exports = function(source){
    var str =  compiler(source) + 'mulo-loader';
    var code = JSON.stringify(str)
    return  `module.exports = ${code};`;
}