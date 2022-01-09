function carrousel() {
    let images = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                        if (ind == 0) return 3*delta + 2*d;
                                        if (ind == 1) return 2*delta + d;
                                        if (ind == 2) return delta;
                                        return 0;
                                    }},
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 3) return 0;
                                    return d;
                                }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta + 2*d;
            return 4*delta + 3*d;
        }
    });
}
function carrousel2() {
    let images = document.querySelectorAll('.image152');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                        if (ind == 1) return 2*delta + d;
                                        if (ind == 2) return delta ;
                                        return 0;
                                    }},
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 3) return 0;
                                    return d;
                                }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            return 3*delta + 2*d;
        }
    });
}
function carrousel3() {
    let images = document.querySelectorAll('.image153');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                        if (ind == 1) return 2*delta + d;
                                        if (ind == 2) return delta ;
                                        return 0;
                                    }},
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 3) return 0;
                                    return d;
                                }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            return 3*delta + 2*d;
        }
    });
}
function carrousel4() {
    let images = document.querySelectorAll('.image154');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                        if (ind == 1) return 2*delta + d;
                                        if (ind == 2) return delta ;
                                        return 0;
                                    }},
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 3) return 0;
                                    return d;
                                }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            return 3*delta + 2*d;
        }
    });
}
function carrouse5() {
    let images = document.querySelectorAll('.image155');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                        if (ind == 1) return 2*delta + d;
                                        if (ind == 2) return delta ;
                                        return 0;
                                    }},
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 3) return 0;
                                    return d;
                                }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            return 3*delta + 2*d;
        }
    });
}
function carrousel6() {
    let images = document.querySelectorAll('.image156');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                        if (ind == 1) return 2*delta + d;
                                        if (ind == 2) return delta ;
                                        return 0;
                                    }},
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 3) return 0;
                                    return d;
                                }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            return 3*delta + 2*d;
        }
    });
}