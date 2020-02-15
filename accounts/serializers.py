from rest_framework import serializers
from .models import UserProfile, Printer, PrintedObject, Address, Location

# class UserProfileSerializer(serializers.ModelSerializer):
#     user=serializers.StringRelatedField(read_only=True)
#     class Meta:
#         model=userProfile
#         fields='__all__'

# TODO: How to create POST API that would update each data of a user.
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['latitude', 'longitude', 'coordinates']

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['street', 'city', 'country_code']

class PrintSerializer(serializers.ModelSerializer):
    # name=serializers.StringRelatedField(many=True)
    class Meta:
        model = PrintedObject
        fields = '__all__'

class PrinterDetailedSerializer(serializers.ModelSerializer):
    PrintedObjects=PrintSerializer(many=True)
    class Meta:
        model = Printer
        fields = ['id', 'picture', 'name', 'PrintedObjects']

class UserProfileDetailedSerializer(serializers.ModelSerializer):
    printers=PrinterDetailedSerializer(many=True)
    addresses=AddressSerializer()
    location=LocationSerializer()
    class Meta:
        model=UserProfile
        fields=['id', 'description', 'printers', 'addresses', 'location']

class UserProfileListCreateSerializer(serializers.ModelSerializer):
    user=serializers.StringRelatedField(read_only=True)
    class Meta:
        model=UserProfile
        fields='__all__'


class PrinterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Printer
        fields='__all__'

class LocationSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'