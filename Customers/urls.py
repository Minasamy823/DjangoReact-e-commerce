from django.conf.urls import url
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from. import views
from django.urls import path, include
from rest_framework.response import Response
# from Customers.views import  FrontendAppView


router = DefaultRouter()
# router.register(r'userprofileViewset', views.userprofileViewset, basename='userprofileViewset')
router.register(r'Loginviewset', views.Loginviewset, base_name='login')
router.register(r'Logoutviewset', views.Logoutviewset, base_name='logout')


"""we don need to specify a base name coz its already in the models file"""
urlpatterns = [

    path('', include(router.urls)),
    url('userprofileViewset', views.userprofileViewset.as_view(), name='userprofileViewset'),




]
