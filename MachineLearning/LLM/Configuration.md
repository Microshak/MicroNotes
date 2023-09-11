
Language models provide configuration parameters to influence the model’s output during inference, separate from the training parameters learned during training time.

* “Max new tokens” sets a limit on the number of tokens the model generates
* Greedy decoding, the simplest method for next-word prediction, selects the word with the highest probability, but it may result in repeated words or sequences.
* Random sampling introduces variability words at random based on the probability distribution
* Top-k sampling limits the options by choosing from the k tokens with the highest probability, promoting randomness while preventing highly improbable completions.
* Top-p sampling limits random sampling to predictions whose cumulative probabilities do not exceed a specified threshold, ensuring sensible output.
* Temperature parameter influences the shape of the probability distribution. Higher temperature values increase randomness, while lower values concentrate probability on a smaller set of words.
