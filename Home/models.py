from django.db import models

# Create your models here.
class TextAnimate(models.Model):
    AnimateText = models.CharField(max_length=50)

    def __str__(self):
        return self.AnimateText


