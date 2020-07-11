function Conversion(obj) {
    obj.onmousedown = function (ev) { //鼠标按下时
        
        ev = ev || event;
        //获取鼠标的位置
        var disX = ev.clientX;//鼠标X轴上的位置
        var disY = ev.clientY;//鼠标Y轴上的位置
        //获取宽高
        var objwidth = parseInt(window.getComputedStyle(obj).width);
        var objheight = parseInt(window.getComputedStyle(obj).height);
        document.onmousemove = function (ev) { //鼠标移动时
            console.log('鼠标移动')
            ev = ev || event;
            //宽高在移动的时候在原来的宽高上再加上当前鼠标的位置减去之前鼠标的位置
            obj.style.width = (objwidth + (ev.clientX- disX)) + 'px';
            obj.style.height = (objheight + (ev.clientY- disY)) + 'px';
        };
        document.onmouseup = function () { //鼠标抬起时
            document.onmouseup = document.onmousemove = null;
        };
    };
}

let parents = document.getElementsByClassName('parent');
console.log(parents)
for(let i = 0; i < parents.length; i++) {
    Conversion(parents[i])
    console.log(parents[i])
}