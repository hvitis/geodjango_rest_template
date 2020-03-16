from django.contrib.gis.db import models
from django.contrib.gis.geos import Point

from django.contrib.auth.models import User
from django_countries.fields import CountryField
import uuid as generateUUID
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField

from django.db.models.signals import post_save
from django.dispatch import receiver


class UserProfile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="profile")
    nickname = models.CharField(max_length=300, blank=True)
    firstName = models.CharField(max_length=300, blank=True)
    lastName = models.CharField(max_length=300, blank=True)
    description = models.TextField(blank=True)
    coordinates = models.PointField(blank=True, null=True, srid=4326)
    is_printing = models.BooleanField(default=False)
    unique_id = models.UUIDField(unique=True, default=generateUUID.uuid4, editable=False)
    # Internally, PhoneNumberField is based upon CharField and by default 
    # represents the number as a string of an international phonenumber 
    # in the database (e.g '+41524204242').
    # The object returned is a PhoneNumber instance, not a string. If strings are used 
    # to initialize it, e.g. via MyModel(phone_number='+41524204242') or form handling, 
    # it has to be a phone number with country code.
    phone_number = PhoneNumberField(blank=True)

    date_joined = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        try:
            return self.user.username
        except:
            pass

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    print(sender, instance, created, kwargs)
    if created:
        UserProfile.objects.create(user=instance)
        # Location.objects.create(profile_id=instance.id)
        SocialMedia.objects.create(profile_id=instance.id)
        ProfileImage.objects.create(profile_id=instance.id)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    print(sender, instance.username, kwargs)
    instance.profile.save()


# class Location(models.Model):
#     profile = models.OneToOneField(
#         UserProfile, on_delete=models.CASCADE, related_name="location")
#     coordinates = models.PointField(blank=True, null=True, srid=4326)
#     is_printing = models.BooleanField(default=False)
#     uuid = generateUUID.uuid4()

#     def __str__(self):
#         try:
#             return self.profile.user.username
#         except:
#             pass

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
        try:
            return self.profile.user.username
        except:
            pass
        
class ProfileImage(models.Model):
    profile = models.OneToOneField(
        UserProfile, on_delete=models.CASCADE, related_name="profileImage")
    file = models.ImageField(
        default="/profile_pictures/default.png", upload_to="profile_pictures/")

    def __str__(self):
        try:
            return self.profile.user.username
        except:
            pass