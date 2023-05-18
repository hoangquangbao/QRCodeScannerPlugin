<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <div id="app">
    <div style="margin-top: 10rem"></div>
    <button @click="startScan">Start QRCode Scanner</button>
    <br />
    <button @click="stopScan">Stop Scanner</button>
    <br />
    <button @click="checkPermission">Check Permission</button>

  </div>
</template>

<script setup>
// import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

// const startScan = async () => {
//   // Check camera permission
//   // This is just a simple example, check out the better checks below
//   await BarcodeScanner.checkPermission({ force: true });

//   // make background of WebView transparent
//   // note: if you are using ionic this might not be enough, check below
//   BarcodeScanner.hideBackground();

//   const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

//   // if the result has content
//   if (result.hasContent) {
//     console.log(result.content); // log the raw scanned content
//   }
// };

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

const startScan = async () => {
  // Check camera permission
  // This is just a simple example, check out the better checks below
  await BarcodeScanner.checkPermission({ force: true });

  // make background of WebView transparent
  // note: if you are using ionic this might not be enough, check below
  BarcodeScanner.hideBackground();

  const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

  // if the result has content
  if (result.hasContent) {
    console.log(result.content); // log the raw scanned content
    const c = confirm(result.content);

    if (c) {
      BarcodeScanner.hideBackground
    } else {
      BarcodeScanner.hideBackground
    }
  }
};

const stopScan = () => {
  BarcodeScanner.showBackground();
  BarcodeScanner.stopScan();
};

const checkPermission = async () => {
  const status = await BarcodeScanner.checkPermission();

  if (status.denied) {
    // the user denied permission for good
    // redirect user to app settings if they want to grant it anyway
    const c = confirm('If you want to grant permission for using your camera, enable it in the app settings.');
    if (c) {
      BarcodeScanner.openAppSettings();
    }
  }
};

</script>