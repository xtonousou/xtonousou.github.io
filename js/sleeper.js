function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function w8() {
  await sleep(750);
}
