
# Images
LIST: sudo docker images -a


# Containers

LIST:  sudo docker ps -a

## Build

```bash

$ cd folderODockerfile

# for cpu
$ docker build -f jupyter/tensorflow-notebook -t jupyter/tensorflow-notebook .

```

### Run Locally

To Start the container

```bash

# Make sure the external port used is set correctly for the host machine. -p external:container
# for cpu
$ mkdir home
$ docker run -d --rm -v $PWD/home:/home -p 81:80 --name jupyter/tensorflow-notebook TFNotebook



```
