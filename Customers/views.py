from .serializers import *
from .models import Userprofile
from rest_framework import viewsets
from rest_framework.generics import ListCreateAPIView
from cart.models import Cart
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

class userprofileViewset(ListCreateAPIView):
     serializer_class = User_serializers
     queryset = Userprofile.objects.all()


     def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        token, created = Token.objects.get_or_create(user=serializer.instance)
        return Response({'token': token.key}, status=status.HTTP_201_CREATED, headers=headers)





class Loginviewset (viewsets.ViewSet):
    """checks email and pass and return the response"""
    serializer_class = AuthTokenSerializer

    def create (self, request):
        """use the obtainauthtoken apiview to validate and create a token """
        return ObtainAuthToken().post(request)


#logout with get method which is list in viewsets, it destroys the token
class Logoutviewset (viewsets.ViewSet):

    def list(self, request):
        return request.user.auth_token.delete()
