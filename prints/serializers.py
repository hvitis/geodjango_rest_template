from rest_framework import serializers
from .models import Print
class PrintsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Print
        fields = ['name', 'picture']