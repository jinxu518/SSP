const result = (function(exports, module){
    exports = module.exports;
    exports.firstname = 'John';
    // console.log(exports);
    module.exports.lastname = 'Smith';
    exports = {
        getFullName: function(){
            console.log('John Smith')
        }
    }
    return module.exports;
}).apply(null, [null, {exports: {}}]);
console.log(result);
// the result is { firstname:'John', latename:'Smith' }