from django.conf.urls import url
from. import views



urlpatterns = [


    url(r'checkout', views.Order_viewsets.as_view(), name='Order_viewsets'),

    ]
