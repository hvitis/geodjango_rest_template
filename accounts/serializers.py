from rest_framework import serializers
from .models import UserProfile, Location
class LocationSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields=['latitude', 'longitude', 'coordinates']

class UserProfileSerializer(serializers.ModelSerializer):
    # printers=PrinterDetailedSerializer(many=True)
    location=LocationSerialiazer()
    class Meta:
        model=UserProfile
        fields=['id', 'description', 'location']




class UserProfileListCreateSerializer(serializers.ModelSerializer):
    user=serializers.StringRelatedField(read_only=True)
    class Meta:
        model=UserProfile
        # TODO: On List serializer show location, make PUT serializer for updating user without location
        fields=['user', 'nickname', 'firstName', 'lastName', 'description', 'owns_printer']
class UserProfileListSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=['id', 'user', 'lastName']
# nickname=models.CharField(max_length=300, blank=True,null=True)
#     firstName=models.CharField(max_length=300, blank=True,null=True)
#     lastName=models.CharField(max_length=300, blank=True,null=True)
#     description=models.TextField(blank=True,null=True)

#     date_joined=models.DateTimeField(auto_now_add=True)
#     updated_on=models.DateTimeField(auto_now=True)

#     owns_printer=models.BooleanField(defaul