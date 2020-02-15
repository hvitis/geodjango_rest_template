from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView, ListAPIView)
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from .models import UserProfile, Printer, Location
from .permissions import IsOwnerProfileOrReadOnly
from .serializers import UserProfileDetailedSerializer, UserProfileListCreateSerializer, PrinterSerializer, LocationSerialiazer

class UserProfileFullListView(ListAPIView):
    queryset=UserProfile.objects.all()
    serializer_class=UserProfileDetailedSerializer
    # permission_classes=[IsAuthenticated]
    permission_classes=[]



class UserProfileFullDetailView(ListAPIView):
    queryset=UserProfile.objects.all()
    serializer_class=UserProfileDetailedSerializer
    permission_classes=[]
    # permission_classes=[IsAuthenticated]
    def get_queryset(self):
        queryset = UserProfile.objects.filter(user_id=self.kwargs["pk"])
        return queryset
        serializer_class = UserProfileDetailedSerializer


class PrinterListView(ListCreateAPIView):
    queryset=Printer.objects.all()
    serializer_class=PrinterSerializer
    # permission_classes=[IsOwnerProfileOrReadOnly,IsAuthenticated]
    permission_classes=[]

class PrinterDetailView(ListCreateAPIView):
    queryset=Printer.objects.all()
    serializer_class=PrinterSerializer
    # permission_classes=[IsOwnerProfileOrReadOnly,IsAuthenticated]
    permission_classes=[]
    # This is how we indicate how we want to create the serializer. In this case, we wanted to 
    # populate the read_only user field with the requesting user then populate the serializer with this value.
    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)
    def get_queryset(self):
        queryset = Printer.objects.filter(id=self.kwargs["pk"])
        return queryset
        serializer_class = PrinterSerializer

class SetLocationView(ListCreateAPIView):
    queryset=Location
    serializer_class=LocationSerialiazer
    permission_classes=[]
    def perform_create(self, serializer):
        profile=self.request.user
        serializer.save(profile=profile)
    def get_queryset(self):
        queryset = Location.objects.all()
        return queryset
        serializer_class = LocationSerialiazer