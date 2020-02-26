from django.shortcuts import render
from .serializers import OrderSerializer
from .models import Order
from rest_framework.generics import (CreateAPIView, UpdateAPIView)


# Create your views here.
class OrderView(CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = []

    # def get_queryset(self):
    #     queryset = UserProfile.objects.filter(user_id=self.kwargs["pk"])
    #     return queryset
    #     serializer_class = OrderSerializer

