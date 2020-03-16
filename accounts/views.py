from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, UpdateAPIView)
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from .models import UserProfile, SocialMedia, ProfileImage
from .permissions import IsOwnerProfileOrReadOnly
from .serializers import UserProfileSerializer, BasicInfoSerializer,  LocationSerialiazer, SocialMediaSerializer, ProfileImageSerializer, NearbyUsersSerialiazer
from django.contrib.gis.geos import Point
from django.contrib.gis.measure import Distance  
from rest_framework_gis.pagination import GeoJsonPagination

from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import action
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import MultiPartParser
from rest_framework.exceptions import APIException, ValidationError
from rest_framework import status
from rest_framework.response import Response
from django.contrib.gis.db.models.functions import Distance as ClosestDistance


class UserProfileListView(ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = []
    # permission_classes=[IsOwnerProfileOrReadOnly,IsAuthenticated]
    # This is how we indicate how we want to create the serializer. In this case, we wanted to
    # populate the read_only user field with the requesting user then populate the serializer with this value.

# TODO: Make post and update endpoint


class UserProfileDetailView(ListAPIView):
    # queryset = UserProfile.objects.get(uuid=self.kwargs["uuid"])
    serializer_class = UserProfileSerializer
    permission_classes = []

    def get_queryset(self):
        queryset = UserProfile.objects.get(uuid=self.kwargs["uuid"])
        return queryset
        serializer_class = UserProfileSerializer


class UserBasicInfoView(ListAPIView, UpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = BasicInfoSerializer
    permission_classes = []

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)

    def get_queryset(self):
        queryset = UserProfile.objects.filter(user_id=self.kwargs["pk"])
        return queryset
        serializer_class = BasicInfoSerializer


class SocialMediaView(ListAPIView, UpdateAPIView):
    serializer_class = SocialMediaSerializer
    permission_classes = []

    def perform_create(self, serializer):
        # user=self.request.user
        profile_id = self.kwargs["pk"]
        # serializer.save(user=user)
        serializer.save(profile_id=profile_id)

    def get_queryset(self):
        print("Getting location")
        queryset = SocialMedia.objects.filter(profile_id=self.kwargs["pk"])
        return queryset
        serializer_class = SocialMediaSerializer
# TODO: Make post and update endpoint


class UsersLocationView(UpdateAPIView, ListAPIView):
    serializer_class = LocationSerialiazer
    permission_classes = []

    def perform_create(self, serializer):
        print(self)
        # user=self.request.user
        profile_id = self.kwargs["pk"]
        # serializer.save(user=user)
        serializer.save(id=profile_id)

    def get_queryset(self):
        print("Getting location")
        queryset = UserProfile.objects.filter(id=self.kwargs["pk"])
        return queryset
        serializer_class = LocationSerialiazer


class ProfileImageUploadView(APIView):
    parser_classes = (MultiPartParser,)
    permission_classes = []

    def put(self, request, pk, format=None):
        file_obj = request.data['file']
        print(self.kwargs['pk'], pk, file_obj)
        new_picture = ProfileImage.objects.get(profile_id=pk)
        new_picture.file = file_obj
        new_picture.save()
        new_picture = ProfileImage.objects.get(profile_id=pk)
        return Response(status=200, data={"profilePicture": new_picture.file.name})

class NearbyUsersListView(ListAPIView, APIException):
    model = UserProfile
    serializer_class = NearbyUsersSerialiazer
    pagination_class = GeoJsonPagination
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        print(self.request.query_params)
        try:
            dict_sort = sorted(self.request.query_params.items())
            latitude, longitude, radius = [v[1] for v in dict_sort]
            print(latitude, longitude, radius)
        except ValueError:
            raise ValidationError(['Something wrong with amount of argumetns!'], code=400)
        try:
            radius=float(radius)
            latitude=float(latitude)
            longitude=float(longitude)
        except ValueError:
            raise ValidationError(['Somethin wrong with data types!'], code=400)
        point=Point(longitude, latitude)
        queryset = UserProfile.objects.filter(coordinates__distance_lt=(point, Distance(km=radius))).order_by('profile')[0:20]
        return queryset

class ClosestUserView(ListAPIView, APIException):
    model = UserProfile
    serializer_class = NearbyUsersSerialiazer
    pagination_class = GeoJsonPagination
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        queryset = []
        try:
            dict_sort = sorted(self.request.query_params.items())
            latitude, longitude = [v[1] for v in dict_sort]
        except ValueError:
            raise ValidationError(['Something wrong with amount of argumetns'], code=400)
        try:
            latitude=float(latitude)
            longitude=float(longitude)
        except ValueError:
            raise ValidationError(['Somethin wrong with data types'], code=400)
        point=Point(longitude, latitude, srid=4326)
        closest_user = UserProfile.objects.annotate(distance=ClosestDistance('coordinates', point)).order_by('distance').first()
        queryset.append(closest_user)
        print(closest_user)
        return queryset

class ProfileImageUploadView(APIView):
    parser_classes = (MultiPartParser,)
    permission_classes = []

    def put(self, request, pk, format=None):
        file_obj = request.data['file']
        print(self.kwargs['pk'], pk, file_obj)
        new_picture = ProfileImage.objects.get(profile_id=pk)
        new_picture.file = file_obj
        new_picture.save()
        new_picture = ProfileImage.objects.get(profile_id=pk)
        return Response(status=200, data={"profilePicture": new_picture.file.name})
