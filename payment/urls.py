
from django.conf.urls import url

from .views import checkout

urlpatterns = [
    url(r'payment', checkout, name="payment"),

]
