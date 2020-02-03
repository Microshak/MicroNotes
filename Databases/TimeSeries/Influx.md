SHOW DATABASES

CREATE DATABASE pirates
CREATE RETENTION POLICY oneday ON pirates DURATION 1d REPLICATION 1

use pirates
INSERT treasures,captain_id=pirate_king value=2

INSERT INTO oneday treasures,captain_id=pirate_king value=2
Using retention policy oneday


 SELECT * FROM "oneday"