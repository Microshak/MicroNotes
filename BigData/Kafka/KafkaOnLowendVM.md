You can adjust the JVM heap size by editing kafka-server-start.sh, zookeeper-server-start.shand so on:

Change 

export KAFKA_HEAP_OPTS="-Xmx1G -Xms1G"

export KAFKA_HEAP_OPTS="-Xmx256M -Xms256M"
