from django.db import models
from accounts.models import UserProfile

# TODO: Male the printer storing just a 
class Printer(models.Model):
    profile=models.ForeignKey( UserProfile, on_delete=models.CASCADE ,related_name="printers")
    model = models.CharField(max_length=255, unique=False)

    # name = models.CharField(max_length=255, unique=False)
    # picture = models.ImageField(upload_to="printer_pictures/")
    # TODO: Make a selectable Model list with optional name of the printer
    # model

    # class Meta:
        # This means that I cant have 2 printers called the same with the same owner
        # unique_together = ['profile', 'name']
        # ordering = ['name']
    def __str__(self):
        return self.model

