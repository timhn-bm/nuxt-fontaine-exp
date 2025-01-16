<template>
  <div>
    <div>font vs fontaine fallback vs native fallback</div>
    <h1 class="heading-1">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </h1>
    <!-- <div
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
    </div> -->

    <h2 class="heading-2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </h2>
    <!-- <div
      style="
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
        justify-items: center;
      "
    >
      <h2 class="heading-2-fallback">This is a subtitle</h2>
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
      <h2 class="heading-2-default">This is a subtitle</h2>
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
    </div>-->

    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
  </div>
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
  font-size: 200px;
}

.heading-1-fallback {
  font-family: "BMDupletTXT fallback";
  font-size: 200px;
}

.heading-1-default {
  font-size: 200px;
}

.heading-2 {
  font-family: BMDupletDSP;
  font-size: 120px;
}

.heading-2-fallback {
  font-family: "BMDupletDSP fallback";
  font-size: 120px;
}

.heading-2-default {
  font-size: 120px;
}
</style>
