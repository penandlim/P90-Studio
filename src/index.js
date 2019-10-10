// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import $ from 'jquery';
import anime from 'animejs/lib/anime.es.js';

$(function() {
    // start up your app
    anime({
        targets: '.logo',
        opacity: [0, 1],
        translateY: ["20%", "0"],
        delay: 500,
        duration: 1000,
        easing: 'easeOutCubic'
    });
});