from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, UpdateAPIView)
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from .models import UserProfile, Location, SocialMedia, ProfileImage
from .permissions import IsOwnerProfileOrReadOnly
from .serializers import UserProfileSerializer, BasicInfoSerializer,  LocationSerialiazer, SocialMediaSerializer, ProfileImageSerializer

from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import action
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import MultiPartParser


class UserProfileListView(ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = []
    # permission_classes=[IsOwnerProfileOrReadOnly,IsAuthenticated]
    # This is how we indicate how we want to create the serializer. In this case, we wanted to
    # populate the read_only user field with the requesting user then populate the serializer with this value.

# TODO: Make post and update endpoint


class UserProfileDetailView(ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = []

    def get_queryset(self):
        queryset = UserProfile.objects.filter(user_id=self.kwargs["pk"])
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
        # user=self.request.user
        profile_id = self.kwargs["pk"]
        # serializer.save(user=user)
        serializer.save(profile_id=profile_id)

    def get_queryset(self):
        print("Getting location")
        queryset = Location.objects.filter(profile_id=self.kwargs["pk"])
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
