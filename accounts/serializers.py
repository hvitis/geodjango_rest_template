from rest_framework import serializers
from .models import UserProfile, Location , SocialMedia, ProfileImage
from django.contrib.gis.geos import Point
from rest_framework_gis.serializers import GeoFeatureModelSerializer, GeometrySerializerMethodField


class SocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model=SocialMedia
        fields=['websiteUrl', 'facebookUrl', 'twitterUrl', 'telegramUrl', 'linkedinUrl', 'youtubeUrl']

class LocationSerialiazer(GeoFeatureModelSerializer):
    """ A class to serialize locations as GeoJSON compatible data """
    class Meta:
        model = Location
        geo_field = "coordinates"
        id_field = False
        fields = ['coordinates', 'is_printing']

class NearbyUsersSerialiazer(GeoFeatureModelSerializer):
    """ A class to serialize locations as GeoJSON compatible data """
    class Meta:
        model = Location
        geo_field = "coordinates"
        id_field = False
        fields = '__all__'

class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileImage
        fields = "__all__"

class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=['nickname', 'firstName', 'lastName', 'description','phone_number']


class UserProfileSerializer(serializers.ModelSerializer):
    user=serializers.StringRelatedField(read_only=True)
    location=LocationSerialiazer()
    socialMedia=SocialMediaSerializer()
    profileImage=ProfileImageSerializer()
    class Meta:
        model=UserProfile
        # TODO: On List serializer show location, make PUT serializer for updating user without location
        fields=['user', 'nickname', 'firstName', 'lastName', 'description', 'location', 'socialMedia', 'profileImage']
