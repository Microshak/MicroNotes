# 2 Streams must have a time window

```
select * from DRONE d 
LEFT OUTER JOIN WEATHER w  WITHIN 1 HOURS on d.weatherstation = w.weatherstation;
```