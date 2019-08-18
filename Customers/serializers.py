
from . import models
from cart.models import Cart
from rest_framework import serializers #for the passwords savings




class User_serializers(serializers.ModelSerializer):



    class Meta:
        model = models.Userprofile
        fields = ('id','name', 'email', 'password')
        extra_kwargs={'password':{'write_only': True}}

    def create (self, validated_data):
        user = models.Userprofile(
        name = validated_data['name'],
        email = validated_data['email']
        )
        user.set_password(validated_data['password'])
        if user:
            print("User already exists")
        user.save()
        return user
