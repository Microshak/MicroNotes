# Language Understanding

* Natural language and Understanding
* Intent
* Entities
* Utterances

---

## Prebuilt Domain Intents

* Calendar
* Camera
* Communication
* Entertainment
* Events
* Fitness
* Gaming
* Home Automation
* Movie
* Music
* Notes
* On Device
* Places
* Utilities
* Web
* Shopping

---

## Prebuilt Entities

* Data Time
* Geography
* Calender
* Phone Number
* URL
* Person Name
* Number
* Money

---

## Prebuilt Domains Entities

* Communication
* Calendar
* Camera
* Entertainment
* Fitness
* Home Automation
* On Device
* Places
* Shopping

---

## Entity Rows

Same entity used differently

```sql
City:From
City:To
```

---

## Utterances
* Call [Mike]
* How many [employees] in [contoso]
* Send [communication] in [contoso]

---

## Enterprise Ready

* HIPAA Compliant
* GDPR Compliant
* Multiple Pricing Tiers
* 12 Language and 13 Azure Regions

---

## Integrated Experience

* Speech build in
* Sentiment Analytics
* Multi Lingual (build in with language Translation)

---

## Core Language Understanding

* Key Phrase
* Regex entities
* Patterns (integrated with ML)

---

## Speech Priming

* Send data to Speech to Text
* Your trained model

---

## Best Practices

### Too complicated

![full](https://microshak.github.io/MicroNotes/Images/toomuchLuis.png)

---

## Best Practices

### Overlapping content

![full](https://microshak.github.io/MicroNotes/Images/LUISOverlap.png)

---


## Best Practices

### No Multi Intent

I would like a [cheese burger] but hold the [pickles] and also add a [coke] but make that a [small]

---

## Best Practices

### Choose your entity types wisely

|        Match       | Machine-Learned |    Mixed    |
|:------------------:|:---------------:|:-----------:|
| Regular Expression | Simple          | Pattern.any |
| List               | Composite       | Prebuilt    |
| Pattern*           | Hierarchical    |             |
| Role*               | Phrase List*    |             |

``` * not entities but useful ``` 

---


## Best Practices

### Tools

* Versioning
* Slots
* Null intents



## Demo

[Demo](https://www.luis.ai/home)

[Demo](https://azure.microsoft.com/en-us/services/cognitive-services/language-understanding-intelligent-service/)



