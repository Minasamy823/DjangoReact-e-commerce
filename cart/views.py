from rest_framework.generics import CreateAPIView, RetrieveDestroyAPIView, ListCreateAPIView
from .models import Cart
from .serializers import cart_serializers


class Cart_viewset (ListCreateAPIView, RetrieveDestroyAPIView):
    serializer_class = cart_serializers



    def get_queryset (self):
        user = self.request.user
        queryset = Cart.objects.filter(user)

    def pre_save(self, obj):
        obj.user = self.request.user
