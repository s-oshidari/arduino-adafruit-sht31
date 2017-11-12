load("api_math.js");

let SHT31 = {
  _create: ffi('void *mgos_sht31_create(int)'),
  _cls: ffi('void mgos_sht31_close(void *)'),
  _bgn: ffi('void mgos_sht31_begin(void *)'),
  _rt: ffi('int mgos_sht31_read_temperature(void *)'),
  _rh: ffi('int mgos_sht31_read_humidity(void *)'),

  _proto: {
    close: function() {
      return SHT31._cls(this.sht);
    },

    begin: function() {
      return SHT31._bgn(this.sht);
    },

    readTemperature: function() {
      // C-functions output value of “1234” equals 12.34 Deg.
      return SHT31._rt(this.sht) / 100.0;
    },

    readHumidity: function() {
      // c-functions output value of “4321” equals 43.21 %.
      return SHT31._rh(this.sht) / 100.0;
    },
  },

  create: function(addr) {
    let obj = Object.create(SHT31._proto);
    // Return value: SHT31 handle opaque pointer.
    obj.sht = SHT31._create(addr);
    return obj;
  },
};
