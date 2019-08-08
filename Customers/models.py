from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager
# from cart.models import Cart
# from django.db.models import signals

class userprofileManager(BaseUserManager):

    def create_superuser(self, email, name, password=None):
        user = self.create_user(email, name, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

    def create_user(self, email, name, password=None):
        #create user profile using the BaseUserManager auth and saving it in the data

        if not email:
            raise ValueError("Email is a Must")

        email=self.normalize_email(email)
        user = self.model(
            email=email,
            name=name,
        )
        user.set_password(password)
        user.save(using=self._db)

        return user



class Userprofile (AbstractBaseUser, PermissionsMixin):

        #customizing the data you have entered in the last class and put rules for it
        email= models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True
        )
        name = models.CharField(max_length=200, default='')
        is_active = models.BooleanField(default=True)
        is_admin = models.BooleanField(default=False)
        is_staff = models.BooleanField(default=False)

        objects = userprofileManager() #this one for importing the data we have entered in the last class

        REQUIRED_FIELDS = ['name']
        USERNAME_FIELD = 'email' #this means that email will be the identifier of every user can't be similar, so we must write unique
        # in its field up



        def get_full_name(self):

            return self.name
            #get_full_name() is a method for calling the full name of the user and gonna be writtin in the admins' cons

        def get_short_name(self):
            return self.name

        def __str__(self):
            return self.email

        # def perform_create(self, serializer):
        #    cart = Cart(user = self.request.user)
        #    serializer.save(cart=cart)
# signals.post_save.connect(receiver=Cart, sender=Userprofile)
