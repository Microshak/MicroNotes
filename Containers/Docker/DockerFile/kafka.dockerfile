FROM relateiq/oracle-java8


RUN  apt-get update \
  && apt-get install -y wget \
  && rm -rf /var/lib/apt/lists/*

RUN wget https://www-eu.apache.org/dist/kafka/2.3.0/kafka_2.12-2.3.0.tgz



RUN tar -xzf kafka_2.12-2.3.0.tgz
RUN cd kafka_2.12-2.3.0