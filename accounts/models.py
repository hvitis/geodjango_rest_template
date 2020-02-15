from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField
import uuid
from django.contrib.gis.geos import Point
# Create your models here.

class UserProfile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="profiles")
    description=models.TextField(blank=True,null=True)
    date_joined=models.DateTimeField(auto_now_add=True)
    updated_on=models.DateTimeField(auto_now=True)
    owns_printer=models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

class Printer(models.Model):
    profile=models.ForeignKey( UserProfile, on_delete=models.CASCADE ,related_name="printers")
    name = models.CharField(max_length=255, unique=False)
    picture = models.URLField()
    # TODO: Make a selectable Model list with optional name of the printer
    # model

    class Meta:
        # This means that I cant have 2 printers called the same with the same owner
        unique_together = ['profile', 'name']
        ordering = ['name']
    def __str__(self):
        return self.name


class PrintedObject(models.Model):
    printer = models.ForeignKey(Printer, on_delete=models.CASCADE,related_name="PrintedObjects")
    name = models.CharField(max_length=255)
    class Meta:
        unique_together = ['printer', 'name']
        ordering = ['name']
    def __str__(self):
        return self.name

class Address(models.Model):
    profile = models.OneToOneField(UserProfile,on_delete=models.CASCADE,related_name="addresses")
    street = models.CharField(max_length=255, blank=True,null=True)
    city = models.CharField(max_length=255, blank=True,null=True)
    country_code = CountryField(blank=True,null=True)
  

class Location(models.Model):
    profile = models.OneToOneField(UserProfile,on_delete=models.CASCADE,related_name="location")
    latitude=models.FloatField(null=True, blank=False, default=None)
    longitude=models.FloatField(null=True, blank=False, default=None)
    coordinates = Point()
    def __str__(self):
        return 'Lat: %d, Lng: %d' % (self.latitude, self.longitude)