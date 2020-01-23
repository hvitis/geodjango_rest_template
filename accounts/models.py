from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField
# Create your models here.

class userProfile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="profiles")
    description=models.TextField(blank=True,null=True)
    date_joined=models.DateTimeField(auto_now_add=True)
    updated_on=models.DateTimeField(auto_now=True)
    owns_printer=models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

class printer(models.Model):
    profile=models.ForeignKey( userProfile, on_delete=models.CASCADE ,related_name="printers")
    name = models.CharField(max_length=255)
    picture = models.URLField()
    class Meta:
        unique_together = ['profile', 'name']
        ordering = ['name']
    def __str__(self):
        return self.name


class printed_object(models.Model):
    printer = models.ForeignKey(printer, on_delete=models.CASCADE,related_name="printed_objects")
    name = models.CharField(max_length=255)
    class Meta:
        unique_together = ['printer', 'name']
        ordering = ['name']
    def __str__(self):
        return '%d' % (self.id)

class address(models.Model):
    profile = models.OneToOneField(userProfile,on_delete=models.CASCADE,related_name="addresses")
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    country = CountryField()
    def __str__(self):
        return '%d' % (self.id)    

class location(models.Model):
    profile = models.OneToOneField(userProfile,on_delete=models.CASCADE,related_name="location")
    latitude=models.FloatField(blank=False)
    longitude=models.FloatField(blank=False)
    def __str__(self):
        return '%d' % (self.id)