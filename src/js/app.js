import { timer } from 'timer';
import { menu } from 'menu';
import { video } from 'video';
import { validation, select, mask, switcher, addChild } from 'form';
import { slider } from 'slider';
import { project } from 'project';

let app = {
  init() {
    // timer();
    // menu();
    // video();
    validation();
    addChild();
    select();
    // mask();
    // switcher();
    slider();
    project();
  }


};
app.init();



