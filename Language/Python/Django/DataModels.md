
myCoolApp/models.py
```python
from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    

```

mysite/settings.py

```python
    
INSTALLED_APPS = [
    'polls.apps.PollsConfig',
 #other stuff
]
```

```bash
    
python manage.py makemigrations polls

python manage.py sqlmigrate polls 0001 #or other number spewed by the last statement

 python manage.py migrate

```