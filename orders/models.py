from django.db import models

# Create your models here.
class Order(models.Model):
    email = models.EmailField(unique=True)
    order = models.CharField(max_length=255, null=True)
    def __str__(self):
        return self.email
