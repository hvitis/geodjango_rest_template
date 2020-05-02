from django.db import models
from accounts.models import UserProfile

# Create your models here.

class Print(models.Model):
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE,related_name="Prints")
    name = models.CharField(max_length=255)
    picture = models.ImageField(upload_to="print_pictures/")
    class Meta:
        # unique_together = ['profile', 'name']
        ordering = ['name']
    def __str__(self):
        return self.name