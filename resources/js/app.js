import './bootstrap';

import Alpine from 'alpinejs';

import {
    Sidenav,
    Ripple,
    Datatable,
    Dropdown,
    initTE,
    Collapse,
    Tab,
    Popconfirm,
    Chart,
} from "tw-elements";

window.Alpine = Alpine;

Alpine.start();

initTE({ 
    Sidenav, 
    Ripple, 
    Datatable, 
    Dropdown, 
    Collapse, 
    Tab, 
    Popconfirm,
    Chart,
});

const instansi = document.getElementById('datatable')
const tabelInstansi = new Datatable(instansi, data)

document.getElementById('datatable-search-input').addEventListener('input', (e) => {
    tabelInstansi.search(e.target.value);
});