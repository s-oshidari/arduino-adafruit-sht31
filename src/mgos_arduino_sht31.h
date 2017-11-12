/*
 * Copyright (c) 2014-2017 Cesanta Software Limited
 * All rights reserved
 *
 * Arduino Adafruit DHT library API wrapper
 */

#include "Adafruit_SHT31.h"

#ifdef __cplusplus
extern "C"
{
#endif

Adafruit_SHT31 *mgos_sht31_create(int addr);
void mgos_sht31_close(Adafruit_SHT31 *sht);
void mgos_sht31_begin(Adafruit_SHT31 *sht);
int mgos_sht31_read_temperature(Adafruit_SHT31 *sht);
int mgos_sht31_read_humidity(Adafruit_SHT31 *sht);

#ifdef __cplusplus
}
#endif  /* __cplusplus */
