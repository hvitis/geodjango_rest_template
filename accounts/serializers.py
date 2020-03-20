from rest_framework import serializers
from .models import UserProfile , SocialMedia, ProfileImage
from django.contrib.gis.geos import Point
from rest_framework_gis.serializers import GeoFeatureModelSerializer, GeometrySerializerMethodField


class SocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model=SocialMedia
        fields=['websiteUrl', 'facebookUrl', 'twitterUrl', 'telegramUrl', 'linkedinUrl', 'youtubeUrl']

class LocationSerialiazer(GeoFeatureModelSerializer):
    """ A class to serialize locations as GeoJSON compatible data """
    class Meta:
        model = UserProfile
        geo_field = "coordinates"
        id_field = False
        fields = ['coordinates', 'is_printing', 'unique_id']

class NearbyUsersSerialiazer(GeoFeatureModelSerializer):
    """ A class to serialize locations as GeoJSON compatible data """
    class Meta:
        model = UserProfile
        geo_field = "coordinates"
        id_field = False
        fields = ['coordinates', 'is_printing', 'unique_id']

class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileImage
        fields = ['file']

class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=['nickname', 'firstName', 'lastName', 'description', 'phone_number', 'is_printing', 'help_type',]


class UserProfileSerializer(serializers.ModelSerializer):
    user=serializers.StringRelatedField(read_only=True, many=False)
    # location=LocationSerialiazer()
    socialMedia=SocialMediaSerializer()
    profileImage=ProfileImageSerializer()
    class Meta:
        model=UserProfile
        # TODO: On List serializer show location, make PUT serializer for updating user without location
        fields=['user', 'unique_id', 'help_type', 'firstName', 'lastName', 'description', 'socialMedia', 'profileImage', 'date_joined', 'phone_number']
