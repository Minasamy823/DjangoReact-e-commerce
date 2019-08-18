from . import models
from rest_framework import serializers
from Customers.serializers import User_serializers
from Shop.serializers import Product_serializers


class cart_serializers(serializers.ModelSerializer):

    items = serializers.StringRelatedField(many=True)
    user = User_serializers(read_only=True)


    class Meta:
        model =  models.Cart
        fields = ['id', "created_at", "items", 'user']


class CartItem_serializers(serializers.ModelSerializer):
    cart = cart_serializers(read_only=True)
    product = Product_serializers(read_only=True)

    class Meta:
        model =  models.CartItem
        fields = ["product", 'cart', 'id', 'quantity']
