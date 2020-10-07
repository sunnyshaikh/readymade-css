const box = document.getElementById('box');

const xOffset = document.getElementById('xOffset');
const yOffset = document.getElementById('yOffset');
const blur = document.getElementById('blur');

const sColor = document.getElementById('sColor');
const bColor = document.getElementById('bColor');

const codeToCopy = document.getElementById('codeToCopy');
const copyBtn = document.getElementById('copyBtn');

const generateShadow = () => {
    box.style.boxShadow = `${xOffset.value}px ${yOffset.value}px ${blur.value}px ${sColor.value}`;
    codeToCopy.innerText = `box-shadow: ${xOffset.value}px ${yOffset.value}px ${blur.value}px ${sColor.value}`;
}

const boxColor = () => {
    box.style.backgroundColor = `${bColor.value}`;
}