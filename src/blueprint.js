function Blueprint(name, required, output) {
    return {
        required: required,
        output: output,
        isFulfilled: function(input) {
            return !required.some(function(val) { 
                return input.indexOf(val) === -1;
            });
        }
    }
}
