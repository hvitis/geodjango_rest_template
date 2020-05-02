from django.shortcuts import render
from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, UpdateAPIView)
from .serializers import PrintsSerializer
from .models import Print
class PrintsView(ListCreateAPIView):
    serializer_class = PrintsSerializer    
    permission_classes=[]
    def perform_create(self, serializer):
        # user=self.request.user
        
        # serializer.save(user=user)
        serializer.save(profile_id=self.kwargs["pk"])

    def get_queryset(self):
        print("Getting prints")
        queryset = Print.objects.filter(profile_id=self.kwargs["pk"])
        return queryset
        serializer_class = PrintsSerializer    