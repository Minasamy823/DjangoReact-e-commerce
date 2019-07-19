from. import views
from django.conf.urls import url



urlpatterns = [


url(r'cart', views.Cart_viewset.as_view(), name='Cart_viewset'),

]
