define(function() {
    var banner = document.querySelector('.banner');
    var ul = document.querySelector('ul');
    var lis = Array.from(ul.children);
    var ol = document.querySelector('ol');
    var ols = Array.from(ol.children);
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');
    var num = 0;
    for (var i = 0; i < ols.length; i++) {
        (function(i) {
            ols[i].onclick = function() {
                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.display = 'none';
                    ols[j].classList.remove('active');
                }
                ols[i].classList.add('active');
                lis[i].style.display = 'block';
            }
        })(i)
    }

    next.onclick = function() {
        num++;
        if (num > lis.length - 1) { num = 0 };
        for (var i = 0; i < lis.length; i++) {
            ols[i].classList.remove('active');
            lis[i].style.display = 'none';
        }
        ols[num].classList.add('active');
        lis[num].style.display = 'block';
    }

    prev.onclick = function() {
        num--;
        if (num < 0) { num = lis.length - 1 };
        for (var i = 0; i < lis.length; i++) {
            ols[i].classList.remove('active');
            lis[i].style.display = 'none';
        }
        ols[num].classList.add('active');
        lis[num].style.display = 'block';
    }


    autoplay();

    function autoplay() {
        setInterval(function() {
            num++;
            if (num > lis.length - 1) { num = 0 };
            for (var i = 0; i < lis.length; i++) {
                ols[i].classList.remove('active');
                lis[i].style.display = 'none';
            }
            ols[num].classList.add('active');
            lis[num].style.display = 'block';
        }, 1000)
    }
})