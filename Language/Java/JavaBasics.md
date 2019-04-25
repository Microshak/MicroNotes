
# Concepts

**GroupId:** Java Naming [convention](https://docs.oracle.com/javase/specs/jls/se6/html/packages.html#7.7) for all Java projects
**ArtifactId:** Name of the Jar File

---

# Dependencies Management
* Maven (MVN)
* Grattel

---

# The Docs

* [Kafka Streams API](https://kafka.apache.org/documentation/streams/)
* [Spark Docs](https://spark.apache.org/docs/latest/api/java/index.html)

---

# Archtypes
```sh
mvn archetype:generate \
    -DarchetypeGroupId=com.github.jcustenborder.kafka.connect \
    -DarchetypeArtifactId=kafka-connect-quickstart \
    -DarchetypeVersion=2.0.0-cp1
```
---
#Spring boot

1. goto https://start.spring.io/
1. put in the dependencies then download the zip, unzip, and open in Intellij
1. mvn package 
1. sudo mvn spring-boot:run

