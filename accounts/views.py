from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView, ListAPIView)
from rest_framework.permissions import IsAuthenticated
from .models import userProfile
from .permissions import IsOwnerProfileOrReadOnly
from .serializers import UserProfileSerializer, UserProfileListCreateSerializer

class UserProfileDetailedListView(ListAPIView):
    queryset=userProfile.objects.all()
    serializer_class=UserProfileSerializer
    # permission_classes=[IsAuthenticated]
    permission_classes=[]



class UserProfileDetailedDetailView(ListAPIView):
    queryset=userProfile.objects.all()
    serializer_class=UserProfileSerializer
    permission_classes=[]
    # permission_classes=[IsAuthenticated]
    def get_queryset(self):
        queryset = userProfile.objects.filter(user_id=self.kwargs["pk"])
        return queryset
        serializer_class = UserProfileSerializer


class UserProfileListCreateView(ListCreateAPIView):
    queryset=userProfile.objects.all()
    serializer_class=UserProfileListCreateSerializer
    # permission_classes=[IsOwnerProfileOrReadOnly,IsAuthenticated]
    permission_classes=[]

    # This is how we indicate how we want to create the serializer. In this case, we wanted to 
    # populate the read_only user field with the requesting user then populate the serializer with this value.
    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)

class UserProfileDetailCreateView(ListCreateAPIView):
    queryset=userProfile.objects.all()
    serializer_class=UserProfileListCreateSerializer
    # permission_classes=[IsOwnerProfileOrReadOnly,IsAuthenticated]
    permission_classes=[]
    def get_queryset(self):
        queryset = userProfile.objects.filter(user_id=self.kwargs["pk"])
        return queryset
        serializer_class = UserProfileSerializer

    # This is how we indicate how we want to create the serializer. In this case, we wanted to 
    # populate the read_only user field with the requesting user then populate the serializer with this value.
    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)