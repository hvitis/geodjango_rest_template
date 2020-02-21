from django.shortcuts import render
from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, UpdateAPIView)
from .serializers import PrinterSerializer
from .models import Printer
class PrintersView(ListCreateAPIView):
    serializer_class = PrinterSerializer    
    permission_classes=[]
    def perform_create(self, serializer):
        # user=self.request.user
        profile_id = self.kwargs["pk"]
        # serializer.save(user=user)
        serializer.save(profile_id=profile_id)

    def get_queryset(self):
        print("Getting printers")
        queryset = Printer.objects.filter(profile_id=self.kwargs["pk"])
        return queryset
        serializer_class = PrinterSerializer    