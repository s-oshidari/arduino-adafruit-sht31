load("api_math.js");

let SHT31 = {
  _crt: ffi('void *mgos_sht31_create()'),
  _cls: ffi('void mgos_sht31_close(void *)'),
  _up: ffi('bool mgos_sht31_update(void *)'),
  _tp: ffi('int mgos_sht31_temperature(void *)'),
  _hd: ffi('int mgos_sht31_humidity(void *)'),

  _proto: {
    close: function() {
      return SHT31._cls(this.sht);
    },

    update: function() {
      return SHT31._up(this.sht);
    },
    
    temperature: function() {
      // C-functions output value of “1234” equals 12.34 Deg.
      return SHT31._tp(this.sht) / 100.0;
    },

    humidity: function() {
      // c-functions output value of “4321” equals 43.21 %.
      return SHT31._hd(this.sht) / 100.0;
    },
  },

  create: function(addr) {
    let obj = Object.create(SHT31._proto);
    // Return value: SHT31 handle opaque pointer.
    obj.sht = SHT31._crt(addr);
    return obj;
  },
};
