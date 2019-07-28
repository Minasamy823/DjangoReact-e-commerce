from django.shortcuts import render
from order.models import Order
from rest_framework import status, viewsets
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveDestroyAPIView, UpdateAPIView, ListAPIView
from .serializers import Orderserializers
from rest_framework.permissions import IsAuthenticated



class Order_viewsets (ListCreateAPIView, RetrieveDestroyAPIView):
    serializer_class = Orderserializers
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Order.objects.filter(user=user)
    # we can filter by the cart as the cart gonna be filtered by the userprofile
        return queryset

        #this for putting in the serializer the user who is currently loggied in so you
        #don't need to write it every time
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
