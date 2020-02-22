from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField
import uuid
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField


# from django.contrib.gis.geos import Point
# Create your models here.
class User(AbstractUser):
    is_printer = models.BooleanField('printer status', default=True)
    is_searcher = models.BooleanField('searcher status', default=False)
    is_customer = models.BooleanField('customer status', default=False)


class UserProfile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="profiles")
    # TODO: Delete nickname if user can be updated, check in djoser if user can be updated
    nickname = models.CharField(max_length=300, blank=True)
    firstName = models.CharField(max_length=300, blank=True)
    lastName = models.CharField(max_length=300, blank=True)
    description = models.TextField(blank=True)

    # Internally, PhoneNumberField is based upon CharField and by default 
    # represents the number as a string of an international phonenumber 
    # in the database (e.g '+41524204242').
    # The object returned is a PhoneNumber instance, not a string. If strings are used 
    # to initialize it, e.g. via MyModel(phone_number='+41524204242') or form handling, 
    # it has to be a phone number with country code.
    phone_number = PhoneNumberField(blank=True)

    date_joined = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    owns_printer = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username


class Location(models.Model):
    profile = models.OneToOneField(
        UserProfile, on_delete=models.CASCADE, related_name="location")
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    # coordinates = Point()
    coordinates = models.FloatField(blank=True, null=True)

    def __str__(self):
        return 'Lat: %d, Lng: %d' % (self.latitude, self.longitude)


class SocialMedia(models.Model):
    profile = models.OneToOneField(
        UserProfile, on_delete=models.CASCADE, related_name="socialMedia")
    websiteUrl = models.URLField(blank=True)
    facebookUrl = models.URLField(blank=True)
    twitterUrl = models.URLField(blank=True)
    telegramUrl = models.URLField(blank=True)
    linkedinUrl = models.URLField(blank=True)
    youtubeUrl = models.URLField(blank=True)

    def __str__(self):
        return 'Profile: %d' % (self.profile)


class ProfileImage(models.Model):
    profile = models.OneToOneField(
        UserProfile, on_delete=models.CASCADE, related_name="profileImage")
    file = models.ImageField(
        default="/profile_pictures/default.png", upload_to="profile_pictures/")

    def __str__(self):
        return self.file.name
