<script lang="ts">
  class Dimensions {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  }

  const calculate = () => {
    return {
      physical: new Dimensions(screen.width * window.devicePixelRatio, screen.height * window.devicePixelRatio),
      screen: new Dimensions(screen.width, screen.height),
      viewport: new Dimensions(window.innerWidth, window.innerHeight),
      window: new Dimensions(window.outerWidth, window.outerHeight),
    };
  };

  let _ = calculate();
  window.addEventListener('resize', () => {
    _ = calculate();
  });
</script>

<main>
  <div>Physical screen resolution: { _.physical.width }×{ _.physical.height }</div>
  <div>Screen resolution: { _.screen.width }×{ _.screen.height }</div>
  <div>Viewport resolution: { _.viewport.width }×{ _.viewport.height }</div>
  <div>Window size: { _.window.width }×{ _.window.height }</div>
</main>
