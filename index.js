/**
 * @param {*} callback 
 * concat 函数 不检测空数组，不改变原数组
 * 返回一个新的数组
 */
Array.prototype.MyConcat = function(...arr) {}

/**
 * @param {target} 目标索引
 * @param {start} 开始
 * @param {end} 结束
 * copyWithin 函数 从数组的指定位置拷贝元素到数组的另一个指定位置中
 * 改变愿数组
 * 
 * 返回一个新的数组
 */
Array.prototype.MyCopyWithin = function(target, start, end) {}
/**
 * @param {*} callback 
 * every 检测是否所有元素都满足条件
 * 全部满足返回false
 */
Array.prototype.myEvery = function (callback) {
    if(!this instanceof Array || this.length == 0 || typeof callback != 'function') {
        return false
    } else {
        let len = this.length;
        for(let i = 0; i < len; i++) {
            if(!callback(this[i])) {
                return false
            }
        }
        return true
    }
}

/**
 * filter 从数组中找出符合条件的元素
 * 不改变愿数组
 * 返回一个新的数组
 */
Array.prototype.MyFilter = function(callback) {
    if(!Array.isArray(this) || this.length == 0 || typeof callback != 'function') {
        return [];
    } else {
        let result = [];
        for(let i = 0; i <= this.length; i++) {
            let item = this[i];
            if(callback(item, i, this)) {
                result.push(item);
            }
        }
        return result;
    }
}

/**
 * @param {*} callback 
 * map函数 不检测空数组，不改变原数组
 * 返回一个新的数组
 */
Array.prototype.myMap = function(callback) {
    if(!Array.isArray(this) || this.length == 0 || typeof callback != 'function') {
        return []
    } else {
        let arr = [], len = this.length
        for(let i = 0; i < len; i++) {
            arr.push(callback(this[i], i))
        }
        return arr
    }
}
/**
 * @param {*} callback 
 * foreach 函数 不检测空数组，不改变原数组
 */
Array.prototype.myForEach = function (callback) {
    if(!Array.isArray(this) || this.length == 0 || typeof callback == 'function') {
        return []
    } else {
        let len = this.lengtn;
        for(let i = 0; i < len; i++) {
            callback(this[i], i)
        }
    }
}
/**
 * @param {*} callback 
 * some 检测是否有符合条件的元素
 * 有则返回true，不继续检测后面的元素
 */
Array.prototype.mySome = function (callback) {
    if(!this instanceof Array || this.length == 0 || typeof callback != 'function') {
        return false
    } else {
        let len = this.length;
        for(let i = 0; i < len; i++) {
            if(callback(this[i])) {
                return true
            }
        }
        return false
    }
}

/**
 *  @param {*} callback 回调函数
 * filter 从数组中找出符合条件的元素
 * 不改变愿数组
 * 返回一个新的数组
 */
Array.prototype.myReduce = function(callback) {
    if(!Array.isArray(this)) {
        console.error('类型错误')
    } else if(typeof callback != 'function') {
        console.error('请传入回调函数')
    } else if(this.length == 0) {
        return 0
    } else {
        let result = this[0]
        for(let i = 0; i < this.length - 1; i++) {
            result = callback(result, this[i + 1])
        }
        return result;
    }
}