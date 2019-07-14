from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import userprofile
from .models import Images
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework import viewsets



class userprofileViewset(viewsets.ModelViewSet):
     serializer_class = likeserializers
     queryset = userprofile.objects.all()


class Images(viewsets.ModelViewSet):
    serializer_class = Image
    queryset= Images.objects.all()
