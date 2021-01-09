<template>
  <main class="p-4">
    <div>
      Physical screen resolution: {{ physical.width }}×{{ physical.height }}
    </div>
    <div>Screen resolution: {{ screen.width }}×{{ screen.height }}</div>
    <div>Viewport resolution: {{ viewport.width }}×{{ viewport.height }}</div>
    <div>Window size: {{ window.width }}×{{ window.height }}</div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        physical: {
          width: undefined,
          height: undefined,
        },
        screen: {
          width: undefined,
          height: undefined,
        },
        viewport: {
          width: undefined,
          height: undefined,
        },
        window: {
          width: undefined,
          height: undefined,
        },
      };
    },
    methods: {
      setPhysicalWidth() {
        this.physical.width = screen.width * window.devicePixelRatio;
      },
      setPhysicalHeight() {
        this.physical.height = screen.height * window.devicePixelRatio;
      },
      setScreenWidth() {
        this.screen.width = screen.width;
      },
      setScreenHeight() {
        this.screen.height = screen.height;
      },
      setWindowWidth() {
        this.window.width = window.outerWidth;
      },
      setWindowHeight() {
        this.window.height = window.outerHeight;
      },
      setViewportWidth() {
        this.viewport.width = window.innerWidth;
      },
      setViewportHeight() {
        this.viewport.height = window.innerHeight;
      },
      recalculate() {
        this.setPhysicalWidth();
        this.setPhysicalHeight();
        this.setScreenWidth();
        this.setScreenHeight();
        this.setWindowWidth();
        this.setWindowHeight();
        this.setViewportWidth();
        this.setViewportHeight();
      },
    },
    beforeMount() {
      window.addEventListener('resize', this.recalculate);
      this.recalculate();
    },
  };
</script>
