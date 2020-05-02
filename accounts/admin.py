from django.contrib import admin
# from .models import UserProfile, Printer, PrintedObject, Address, Location
from .models import UserProfile, ProfileImage
from django.forms.widgets import TextInput
from django.contrib.gis.db import models
from django.contrib import admin
class AccountsAdmin(admin.ModelAdmin):
    list_display = ('unique_id',)
    search_fields = ('unique_id',)

admin.site.register(UserProfile, AccountsAdmin)
admin.site.register(ProfileImage)
# admin.site.register(PrintedObject)
# admin.site.register(Address)



# admin.site.register(Location)
# class TextFieldLocation(admin.ModelAdmin):
#     formfield_overrides = {
#         models.PointField: {'widget': TextInput }
#     }

# admin.site.register(Location, TextFieldLocation)