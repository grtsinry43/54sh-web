/* 

中南大学校团委 升华网
JS Function For 54shenghua Part II

2024.5.25 @grtsinry43

本JS定义了以下部分的功能实现:
导航栏动画

*/

/**
 * 这里面都用立即执行函数了，怕我的变量名比较抽象
 */

/**
 * 实现轮播图滚动到底就隐藏背景，可以添加一个纯色有模糊的背景
 */
(function () {
    const navbarBgContainer = document.querySelector('.navbar-bg-container');
    const navbarContainer = document.querySelector('.navbar-container');

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
    
    if (isMobileDevice()) {
        navbarBgContainer.style.zIndex = '-1';
        navbarContainer.classList.add("scrolledMobile");
    }else{
        navbarBgContainer.addEventListener("transitionend", () => {
            if (window.scrollY > 0) {
                navbarBgContainer.style.zIndex = '-1';
            }else{
                // navbarBgContainer.style.zIndex = '1';
            }
        })
        window.onscroll = () => {
            if (window.scrollY > 0) {
                navbarBgContainer.style.opacity = '0';
                navbarContainer.classList.add("scrolled");
            } else {
                navbarBgContainer.style.zIndex = '1';
                setTimeout(function() {
                    navbarBgContainer.style.opacity = '1';
                    setTimeout(function() {
                        navbarContainer.classList.remove("scrolled");
                    }, 100); 
                }, 100); 
            }
        };
    }
})();

/**
 * 有关搜索框的显示隐藏，实现搜索
 */
(function () {
    const searchIcon = document.querySelector('.navbar-search img');

    // 获取搜索框元素
    const searchInput = document.getElementById('searchInput');

    // 显示和隐藏
    searchIcon.addEventListener('click', () => {
        console.log(1)
        console.log(searchInput.style.display)
        if (searchInput.style.display !== 'block') {
            //显示
            searchInput.style.display = 'block';
            searchInput.style.padding = "2px 15px";
            setTimeout(function () {
                searchInput.style.width = '200px';
            }, 0);
        } else {
            //搜索
            setTimeout(function () {
                window.location.href = '/search/' + searchInput.value;
            }, 0);
        }
    });

    // 搜索功能
    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            window.location.href = '/search/' + searchInput.value;
        }
    });
    // 点击搜索框外部隐藏
    document.addEventListener('click', function (e) {
        if (e.target !== searchInput && e.target !== searchIcon) {
            searchInput.style.padding = '0';
            searchInput.style.width = '0';
            setTimeout(function () {
                searchInput.style.display = 'none';
            }, 500);
        }
    });
})();