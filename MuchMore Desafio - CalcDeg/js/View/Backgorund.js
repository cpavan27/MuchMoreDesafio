class Background {
  constructor() {}

  afterConstructor(ca, co) {
    const hipot = Math.sqrt(ca * ca + co * co);
    const cons = (Math.atan2(ca, co) * 180) / Math.PI;
    return `
    content: "";
    height: ${hipot}px;
    background:radial-gradient(transparent 50%, rgba(0, 0, 0, 0.2));
    padding: 1px;
    top: -563px;
    display: block;
    position: absolute;
    transform: rotate(-${cons}deg);
    right: 960px;
    z-index: -2;
    `;
  }
}
