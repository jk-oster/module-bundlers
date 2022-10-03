import {camelCase } from 'lodash';
import "./style.scss";

console.log(camelCase('hello world'));

async function iife() {
    console.log(await fetch('http://localhost:3000/api').then(res => res.json()));
}
iife();
