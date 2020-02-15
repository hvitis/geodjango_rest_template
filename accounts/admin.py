from django.contrib import admin
from .models import UserProfile, Printer, PrintedObject, Address, Location

class AccountsAdmin(admin.ModelAdmin):
    pass

admin.site.register(UserProfile, AccountsAdmin)
admin.site.register(Printer)
admin.site.register(PrintedObject)
admin.site.register(Address)
admin.site.register(Location)