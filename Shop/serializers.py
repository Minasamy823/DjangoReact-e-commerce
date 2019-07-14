from . import models
from rest_framework import serializers


class Product_serializers (serializers.ModelSerializer):


    class Meta:
        lookup_field="name"
        model = models.Product
        fields = ("supplier","id","name","image","price","amount","description",
        "condition","classification","created_at", "size", "available")



class supplier_serializers (serializers.ModelSerializer):
    # id = serializers.IntegerField()

    class Meta:
        model = models.Supplier
        fields = ("id","name")
