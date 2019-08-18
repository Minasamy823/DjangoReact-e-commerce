from. import views
from django.conf.urls import url, include
from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'cart', views.CartViewSet)

urlpatterns = [

# url(r'cart/(?P<pk>\w+)/$', views.products_details_in_cart.as_view(), name='supplier_name'),
# url(r'^', include(router.urls)),
url(r'Items', views.CartItem_viewsets.as_view(), name='cartItems'),
url(r'cart', views.CartViewSet.as_view(), name='Cart_viewset'),



]
