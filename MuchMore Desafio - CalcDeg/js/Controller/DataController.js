class DataController {
  constructor() {
    this._campoDay = document.getElementById("days");
    this._campoHour = document.getElementById("hours");
    this._campoMin = document.getElementById("min");
    this._campoSec = document.getElementById("sec");

    this._dataMarcada = new Date(2021, 10, 25, 10, 0);
  }

  calcMinSec() {
    const _data = new Date();
    const min = Math.abs(_data.getMinutes() - 60);
    const sec = Math.abs(_data.getSeconds() - 60);

    this.setMinSec(min, sec);
  }
  setMinSec(min, sec) {
    this._campoMin.textContent = min;
    this._campoSec.textContent = sec;
  }

  calcDiaHora() {
    const _data = new Date();

    const _dif = Math.abs(this._dataMarcada.getTime() - _data.getTime());
    const _dias = Math.ceil(_dif / (1000 * 60 * 60 * 24));

    let _horas;
    if (_data.getHours() <= 10) {
      _horas = Math.abs(_data.getHours() - this._dataMarcada.getHours());
    } else {
      _horas = Math.abs(_data.getHours() - 34);
    }

    this.setDiaHora(_dias, _horas);
  }

  setDiaHora(dias, horas) {
    this._campoDay.textContent = dias;
    this._campoHour.textContent = horas;
  }
}
