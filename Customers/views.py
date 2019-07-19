from .serializers import *
from .models import Userprofile
from rest_framework import viewsets
from cart.models import Cart
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.permissions import IsAdminUser
from . import permissions1

# this view for creating new users and the user has the right to review only his account
#register
class userprofileViewset(viewsets.ModelViewSet):
     serializer_class = User_serializers
     queryset = Userprofile.objects.all()
     authentication_classes = (TokenAuthentication,)
     

     def post_save(self, obj, created=False):
         if created:
             cart = Cart(user=obj)
             cart.save()



     # def update(self, request, pk=None, project_pk=None):
class Loginviewset (viewsets.ViewSet):
    """checks email and pass and return the response"""
    serializer_class = AuthTokenSerializer

    def create (self, request):
        """use the obtainauthtoken apiview to validate and create a token """
        return ObtainAuthToken().post(request)



# class Login_viewsets(viewsets.ModelViewSet):
