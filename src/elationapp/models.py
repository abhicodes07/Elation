from django.db import models

# Create your models here.
class Advice(models.Model):
    TYPE = [
        ('AX', 'Anxiety'),
        ('RL', 'Relationship'),
        ('MH', 'Mental Health'),
        ('WK', 'Work')
    ]
    title = models.CharField(max_length=250)
    description = models.TextField(default="")
    image = models.ImageField(upload_to='advices/')
    type =  models.CharField(max_length=20, choices=TYPE)

    # this returns the title and shows it on the admin page for each d
    def __str__(self):
        return f"{self.title}"
