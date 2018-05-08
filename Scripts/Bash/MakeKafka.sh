
sudo apt-get update
sudo apt install -y  openjdk-8-jre-headless


wget http://apache.claz.org/kafka/1.1.0/kafka_2.11-1.1.0.tgz 


tar xvf kafka_2.11-1.1.0.tgz 

rm kafka_2.11-1.1.0.tgz 
#cd  kafka_2.11-1.1.0
#bin/zookeeper-server-start.sh config/zookeeper.properties
#bin/kafka-server-start.sh config/server.properties
#bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test

