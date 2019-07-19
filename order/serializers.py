from . import models
from rest_framework import serializers


class Orderserializers (serializers.ModelSerializer):

    class Meta:
        model = models.Order
        fields = ['user', 'product'] 
