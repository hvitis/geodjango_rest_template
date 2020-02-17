from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, UpdateAPIView)
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from .models import UserProfile, Location, SocialMedia, ProfileImage
from .permissions import IsOwnerProfileOrReadOnly
from .serializers import UserProfileSerializer, LocationSerialiazer, UserProfileListCreateSerializer, UserProfileListSerializer, SocialMediaSerializer
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .serializers import ProfileImageSerializer
class SocialMediaView(ListCreateAPIView):
    serializer_class = SocialMediaSerializer    
    permission_classes=[]
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
class UsersLocation(ListCreateAPIView):
    serializer_class = LocationSerialiazer    
    permission_classes=[]
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

class UserProfileFullListView(ListAPIView):
    queryset=UserProfile.objects.all()
    serializer_class=UserProfileSerializer
    permission_classes=[]
    # permission_classes=[IsOwnerProfileOrReadOnly,IsAuthenticated]
    # This is how we indicate how we want to create the serializer. In this case, we wanted to 
    # populate the read_only user field with the requesting user then populate the serializer with this value.

# TODO: Make post and update endpoint
class UserProfileFullDetailView(ListCreateAPIView):
    queryset=UserProfile.objects.all()
    serializer_class=UserProfileListCreateSerializer
    permission_classes=[IsAuthenticated]
    def perform_create(self, serializer):
        user=self.request.user
        print("User", self.request.user)
        serializer.save(user=user)
    def get_queryset(self):
        print("PK", self.kwargs["pk"])
        queryset = UserProfile.objects.filter(user_id=self.kwargs["pk"])
        return queryset
        serializer_class = UserProfileListCreateSerializer


class ProfileImageUploadView(APIView):
    serializer_class = SocialMediaSerializer    
    parser_class = (FileUploadParser,)
    permission_classes=[]

    def perform_create(self, serializer):
        # user=self.request.user
        profile_id = self.kwargs["pk"]
        # serializer.save(user=user)
        serializer.save(profile_id=profile_id)

  
    def post(self, request, *args, **kwargs):

      file_serializer = ProfileImageSerializer(data=request.data)

      if file_serializer.is_valid():
          file_serializer.save()
          return Response(file_serializer.data, status=status.HTTP_201_CREATED)
      else:
          return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)