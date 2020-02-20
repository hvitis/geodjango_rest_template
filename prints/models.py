from django.db import models
from accounts.models import UserProfile

# Create your models here.

class Print(models.Model):
    printer = models.ForeignKey(UserProfile, on_delete=models.CASCADE,related_name="PrintedObjects")
    name = models.CharField(max_length=255)
    picture = models.ImageField(upload_to="print_pictures/")
    class Meta:
        unique_together = ['printer', 'name']
        ordering = ['name']
    def __str__(self):
        return self.name