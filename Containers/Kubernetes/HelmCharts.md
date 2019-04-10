# What is it
Package manager like npm, pip, Maven
---
# Why use Helm
* Roll Backs
* Dev Onboarding 
* App portability
* Better Testing
* Complex Roll Outs
---
# Teminology
* Charts
* Chart of Charts
* Chart Repository
* Releases (a chart that has been deployed)
---
# Helm Component
* Client
  * Helm CLI
    * Runs on your computer
    * Generates k8s templates
    * Sends requests to tiller
* Server
  * Tiller
    * Runs on k8s
    * Manages release history

---

#helm deploy
to deploy make a chart in specific directory
```file
tld
    - Chart.yaml # stores meta data and version information
    - values.yaml # stores default confi values
    - requirements.yaml # dependencies such as mongo or postgres
    charts/ # where dependancies are stored
            -
    templates/ # where we store source templates
        - some.yaml
            key values
            key functions
https://github.com/helm/charts/tree/master/stable
---

