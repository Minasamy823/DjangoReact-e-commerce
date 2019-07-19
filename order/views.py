from django.shortcuts import render
from order.models import Order
from rest_framework import status, viewsets
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveDestroyAPIView, UpdateAPIView, ListAPIView
from .serializers import Orderserializers



class Order_viewsets (ListCreateAPIView, RetrieveDestroyAPIView):
    serializer_class = Orderserializers

    def get_queryset(self):
        user = self.request.user
        queryset = Order.objects.filter(user=user)
    # we can filter by the cart as the cart gonna be filtered by the userprofile
        return queryset
