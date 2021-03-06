import { filter } from './filter.js';

(() => {
  if (!window.location.href.includes('news')) return;
  if (!document.querySelector('#grid-target')) return;

  new filter({
    target: '#grid-target',
    elemSelector: '.archive-item',
    field1: 'tags',
    field2: 'sort-by',
    type: 'news',
    items: window.items,
  });
})()