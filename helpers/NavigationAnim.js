const navigationAnim = (lastScrollTop, windowElement) => {
    let nav = document.getElementById("mainNav"); //.classList.add("background");
    let headerHeight = document.getElementById("mainHeader").offsetHeight || 100;
    let windowWidth = windowElement.innerWidth;
    let st = windowElement.pageYOffset;
    let isScrollUp = st < lastScrollTop;


    if(windowWidth > 780) {
        if (isScrollUp) {
            nav?.classList.remove("hidden");
        } else {
            if (st > headerHeight) {
                nav?.classList.add("hidden");
            }
        }
    } else {
        if(isScrollUp) {
            if(st > 70) {
                nav?.classList.add("hidden");
            } else {
                nav?.classList.remove("hidden");
            }
        } else {
            nav?.classList.add("hidden");
        }
    }


}

export default navigationAnim