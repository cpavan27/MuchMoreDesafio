class ViewController {
  constructor() {
    this.body = document.querySelector("body");
  }

  afterConstructor(ca, co) {
    const hipot = Math.sqrt(ca * ca + co * co);
    const cons = Math.trunc((Math.atan2(ca, co) * 180) / Math.PI) * -1;

    this.body.style.setProperty("--height", hipot - 70 + "px");
    this.body.style.setProperty("--deg", cons + "deg");
    this.body.style.setProperty("--top", cons + "vh");

    console.log(cons, this.body.style);
  }
}
