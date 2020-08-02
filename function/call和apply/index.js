Function.prototype.myCall = function(context) {
    if(typeof this !== 'function') {
        console.log('this 类型错误');
        return;
    }
    let arg = [...arguments].splice(1);
    context.fn = this;
    console.log(arg);
    let result = context.fn(...arg);
    delete context.fn;
    return result;
}

Function.prototype.myApply = function(context) {
    if(typeof this !== 'function') {
        console.log('this 类型错误');
        return;
    }
    context.fn = this
    let result;
    if(arguments[1]){
        result = context.fn(...arguments[1])
    } else {
        result = context,fn()
    }
    delete context.fn
    return result;
}
Function.prototype.myBind = function(context = window, ...args) {
    if(typeof this !== 'function') {
        console.log('类型错误')
        return;
    }
    context.fn = this
    let bound = function() {
        context.fn = this instanceof context.fn ? this : window
        let arg = [...args].concat([...arguments])
        let result = context.fn(...arg);
        delete context.fn
        return result
    }
    bound.prototype = new this()
    return bound
}