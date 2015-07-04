from django.db import models


class Slider(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    img = models.ImageField(upload_to="slider")

    def __unicode__(self):
        return self.title


class About(models.Model):
    description = models.TextField()

    def __unicode__(self):
        return self.description
