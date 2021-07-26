class DataController {
  constructor() {
    this._campoDay = document.getElementById("days");
    this._campoHour = document.getElementById("hours");
    this._campoMin = document.getElementById("min");
    this._campoSec = document.getElementById("sec");
    this._dataMarcada = new Date(2021, 10, 25, 10, 0);
  }

  calcHoraMinSec() {
    const _data = new Date();
    const min = Math.abs(_data.getMinutes() - 60);
    const sec = Math.abs(_data.getSeconds() - 60);

    this.setHoraMinSec(this.calcHora(_data), min, sec);
  }
  calcHora(_data) {
    let _horas;

    if (_data.getHours() <= 9) {
      _horas = Math.abs(this._dataMarcada.getHours() - _data.getHours() - 1);
    } else {
      _horas = Math.abs(34 - _data.getHours());
    }
    return _horas;
  }
  setHoraMinSec(hora, min, sec) {
    this._campoHour.textContent = hora;
    this._campoMin.textContent = min;
    this._campoSec.textContent = sec;
  }

  calcSetDia() {
    const _data = new Date();
    const _dif = Math.abs(this._dataMarcada.getTime() - _data.getTime());
    const _dias = Math.ceil(_dif / (1000 * 60 * 60 * 24));
    this._campoDay.textContent = _dias;
  }
}
