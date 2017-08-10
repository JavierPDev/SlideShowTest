import 'babel-polyfill';
import angular from 'angular';
import 'angular-animate';
import carousel from 'angular-ui-bootstrap/src/carousel';

import SlideshowController from './slideshow/slideshow.controller';
import template from './slideshow/slideshow.template.html';

angular.module('sparkHireSlideshow', [
  'ngAnimate',
  carousel
])
  .component('shSlideshow', {
    controller: SlideshowController,
    template: template
  });

