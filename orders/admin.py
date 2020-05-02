from django.contrib import admin
# from .models import UserProfile, Printer, PrintedObject, Address, Location
from .models import Order
class OrderAdmin(admin.ModelAdmin):
    pass

admin.site.register(Order, OrderAdmin)
