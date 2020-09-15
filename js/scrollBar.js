
let isDisplayScroll = false;
let scrollBar = document.querySelector("#scroll");
let scrollItems = scrollBar.children[0].children;
let sections = document.querySelectorAll("section");
let scrollTimer;
const SCROLL_HIDE_TIME = 2000;

function setHideScroll(){
    isDisplayScroll = !isDisplayScroll;
    scrollBar.style.right = '-30px';
}


function changeActiveIcon(){
    for (let i = 0; i < sections.length; i++)
    {
        if(sections[i].getBoundingClientRect().top > 0)
        {
            for (let j = 0; j < scrollItems.length; j++)
            {
                if (i === j)
                    scrollItems[j].setAttribute('class', 'active');
                else
                    scrollItems[j].setAttribute('class', '');
            }
            break;
        }
        // console.log(window.scrollY, sections[i].clientHeight)
        // if(window.scrollY > sections[i].clientHeight){
        //     console.log(i);
        //     break;
        // }
    }
}


window.addEventListener('scroll', function(e){
    changeActiveIcon();

    if(!isDisplayScroll)
    {
        isDisplayScroll = true;
        scrollBar.style.right = '30px';
        scrollTimer = setTimeout(setHideScroll, SCROLL_HIDE_TIME);
    }
    else
    {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(setHideScroll, SCROLL_HIDE_TIME);
    }
});

scrollBar.addEventListener('mouseover', function(e){
    clearTimeout(scrollTimer);
});

scrollBar.addEventListener('mouseout', function(e){
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(setHideScroll, SCROLL_HIDE_TIME);

});