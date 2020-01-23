from rest_framework import serializers
from .models import userProfile, printer, printed_object, address, location

# class UserProfileSerializer(serializers.ModelSerializer):
#     user=serializers.StringRelatedField(read_only=True)
#     class Meta:
#         model=userProfile
#         fields='__all__'

# TODO: How to create POST API that would update each data of a user.
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = location
        fields = '__all__'

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = address
        fields = '__all__'

class PrintSerializer(serializers.ModelSerializer):
    # name=serializers.StringRelatedField(many=True)
    class Meta:
        model = printed_object
        fields = '__all__'

class PrinterSerializer(serializers.ModelSerializer):
    printed_objects=PrintSerializer(many=True)
    class Meta:
        model = printer
        fields = ['picture', 'name', 'printed_objects']

class UserProfileSerializer(serializers.ModelSerializer):
    printers=PrinterSerializer(many=True)
    addresses=AddressSerializer()
    location=LocationSerializer()
    class Meta:
        model=userProfile
        fields=['id', 'description', 'printers', 'addresses', 'location']

class UserProfileListCreateSerializer(serializers.ModelSerializer):
    user=serializers.StringRelatedField(read_only=True)
    class Meta:
        model=userProfile
        fields='__all__'