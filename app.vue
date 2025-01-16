<template>
  <div>
    <div>font vs fontaine fallback vs native fallback</div>
    <h1 class="heading-1">This is a title</h1>
    <div
      style="
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
        justify-items: center;
      "
    >
      <h1 class="heading-1-fallback">This is a title</h1>
      <span>(fallback)</span>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
        justify-items: center;
      "
    >
      <h1 class="heading-1-default">This is a title</h1>
      <span> (default)</span>
    </div>

    <div>blue=custom font. red=fallback</div>
    <div class="layered">
      <div style="color: blue; font-family: 'BMDupletDSP'">
        ABCDEFGHIJKLMNOPQRSTYUWXYZ
      </div>
      <div style="color: red; font-family: 'BMDupletDSP fallback'">
        ABCDEFGHIJKLMNOPQRSTYUWXYZ
      </div>
    </div>
  </div>

  <div ref="child" />
</template>

<style>
.layered {
  display: grid;
}

.layered > * {
  grid-column-start: 1;
  grid-row-start: 1;
  font-size: 100px;
}

html {
  font-weight: 400;
}

.heading-1 {
  font-family: BMDupletTXT;
  font-size: 140px;
}

.heading-1-fallback {
  font-family: "BMDupletTXT fallback";
  font-size: 140px;
}

.heading-1-default {
  font-size: 140px;
}
</style>
