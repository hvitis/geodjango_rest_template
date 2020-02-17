from django.contrib.auth.models import User
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from djoser.signals import user_activated, user_registered

from .models import UserProfile



# @receiver(post_save, sender=User)
# def create_profile(sender, instance, created, **kwargs):
#     if created:
#         print("Creating UserProfile")
#         UserProfile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     print("Saving UserProfile")
#     instance.UserProfile.save()

@receiver(user_registered)
def create_user_profile(user, request, **kwargs):
    print("Djoser Creating UserProfile")
    UserProfile.objects.create(user=user)