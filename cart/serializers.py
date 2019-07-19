from . import models
from rest_framework import serializers



class cart_serializers(serializers.ModelSerializer):
    class Meta:
        model =  models.Cart
        fields = ["product"]
