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
# from django.views.generic import View
# import logging
# import urllib.request
# import os
# from django.http import HttpResponse
# this view for creating new users and the user has the right to review only his account
#register
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


# class FrontendAppView(View):
#     """
#     Serves the compiled frontend entry point (only works if you have run `yarn
#     run build`).
#     """
#     def get(self, request):
#         print (os.path.join(settings.REACT_APP_DIR, 'build', 'index.html'))
#         try:
#             with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
#                 return HttpResponse(f.read())
#         except FileNotFoundError:
#             logging.exception('Production build of app not found')
#             return HttpResponse(
#                 """
#                 This URL is only used when you have built the production
#                 version of the app. Visit http://localhost:3000/ instead, or
#                 run `yarn run build` to test the production version.
#                 """,
#                 status=501,
#             )
