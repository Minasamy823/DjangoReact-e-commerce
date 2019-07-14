
from . import models

from rest_framework import serializers #for the passwords savings




class likeserializers(serializers.ModelSerializer):



    class Meta:
        model = models.userprofile
        fields = ('id','name', 'email', 'password')
        extra_kwargs={'password':{'write_only': False}}




class Image(serializers.ModelSerializer):

    class Meta:
        model = models.Images
        fields = ('id', 'image','name','price','seller')
