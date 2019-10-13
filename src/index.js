// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import $ from 'jquery';
import anime from 'animejs/lib/anime.es.js';

const _body = $("body");
const _logo = $(".logo");

$(function() {
    // start up your app
    let animation = anime({
        targets: '.logo',
        opacity: [0, 1],
        translateY: ["20%", "0"],
        delay: 500,
        duration: 1000,
        easing: 'easeOutCubic',
        complete: function(anim) {
            animation = null;
        }
    });

    // Events interact
    _logo.on("mousedown touchstart", function() {
        if (animation) {
            animation.seek(animation.duration);
        }
        anime.remove(".logo");
        anime({
            targets: '.logo',
            scale: 1.2,
            duration: 600
        });
    });

    _logo.on("mouseup touchend", function() {
        if (animation) {
            animation.seek(animation.duration);
        }
        anime.remove(".logo");
        anime({
            targets: '.logo',
            scale: 1,
            duration: 200,
            easing: 'easeOutCubic'
        });
    });

});