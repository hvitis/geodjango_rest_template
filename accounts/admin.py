from django.contrib import admin
from .models import userProfile, printer, printed_object, address, location

class AccountsAdmin(admin.ModelAdmin):
    pass

admin.site.register(userProfile, AccountsAdmin)
admin.site.register(printer)
admin.site.register(printed_object)
admin.site.register(address)
admin.site.register(location)