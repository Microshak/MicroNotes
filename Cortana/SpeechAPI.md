# Speech API

aka:
  Microsoft Speech API
  Cortana Speech API 
  Bing Speech API
  
# Capabilities
| Use cases                                                                                          | [REST APIs] | [Client Libraries] |
|----------------------------------------------------------------------------------------------------|-------------|--------------------|
| Convert a short spoken audio, for example, commands (audio length \< 15 s) without interim results | Yes         | Yes                |
| Convert a long audio (\> 15 s)                                                                     | No          | Yes                |
| Stream audio with interim results desired                                                          | No          | Yes                |
| Understand the text converted from audio using LUIS                                                | No          | Yes                |

  [REST APIs]: getstarted/getstartedrest
  [Client Libraries]: getstarted/getstartedclientlibraries  
  
  
  ---
  
  # Recognition modes
  
   * Interactive mode
   * Conversation mode
   * Dictation mode
   
 ---
 # Output
  * Basic
  * N-Best
  
  ---
  # Profanity
  
  | *Profanity* value | Description                                                   |
|-------------------|---------------------------------------------------------------|
| `masked`          | Masks profanity with asterisks. This behavior is the default. |
| `removed`         | Removes profanity from all results.                           |
| `raw`             | Recognizes and returns profanity in all results.              |


---
