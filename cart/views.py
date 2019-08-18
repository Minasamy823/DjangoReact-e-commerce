from rest_framework import viewsets
from .models import Cart, CartItem
from .serializers import cart_serializers, CartItem_serializers
from rest_framework.permissions import IsAuthenticated
from Shop.models import Product
from Shop.serializers import Product_serializers
from rest_framework.generics import ListCreateAPIView, DestroyAPIView
from rest_framework.mixins import CreateModelMixin
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

class CartItem_viewsets (ListCreateAPIView, DestroyAPIView):
    serializer_class = CartItem_serializers
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        cart = Cart.objects.filter(user=self.request.user).first()
        return CartItem.objects.filter(cart=cart)



    def post (self, request):
        cart = Cart.objects.get(user=self.request.user)
        product = Product.objects.get(pk=self.request.data['product_id'])
        quantity = int(self.request.data['quantity'])
        existing = CartItem.objects.filter(product=product, cart=cart).first()

        if existing:
                existing.quantity += quantity
                existing.save()
        else:
            new = CartItem(product=product, quantity=quantity, cart=cart)
            new.save()

        return Response("success")


    def delete (self, request):
        cart = Cart.objects.get(user=self.request.user)
        product = Product.objects.get(pk=self.request.data['product_id'])
        quantity = int(self.request.data['quantity'])
        existing = CartItem.objects.filter(product=product, cart=cart).first()

        if existing and existing.quantity > 1:
            existing.quantity -= quantity
            if existing.quantity == 0:
                existing.delete()
            else:
                existing.save()
        else:
            existing.delete()

        return Response("success")






class CartViewSet(ListCreateAPIView):
    """
    API endpoint that allows carts to be viewed or edited, remeber to make it automatically
    """

    serializer_class = cart_serializers
    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Cart.objects.filter(user=self.request.user)
