from django.conf.urls import url
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from. import views
from django.urls import path, include

router = DefaultRouter()
router.register(r"shop", views.products_list)
router.register(r"guide", views.suppliers_list)






urlpatterns = [

    path('', include(router.urls)),
    url('guide/(?P<supplier_name>\w+)/(?P<name>\w+)/$', views.products_details.as_view(), name='product_details'),
    url('guide/(?P<supplier_name>\w+)/$', views.products_by_supplier_name.as_view(), name='supplier_name'),

    # url(r'^shop/$', views.products_list.as_view(), name='shop'),
    # url(r'^shop/(?P<id>[-\w]+)', views.products_list.as_view(), name='shop'),
    # url(r'^(?P<name>\w+)/$', views.product_detail_by_supplier_name.as_view(), name='products_detail_by_supplier_name'),
    # url(r'(?P<name>\w+)/$', views.products_list.as_view(), name='product_detail'),
    # url(r'supplier_list/(?P<supplier_id>[-\w]+)', views.product_detail_by_supplier_id.as_view(), name='suppliers_list'),
    # url(r'supplierlist/(?P<name>\w+)/$', views.suppliers_list.as_view(), name='product_list_by_category'),
    # url(r'supplierlist/', views.suppliers_list.as_view(), name='product_detail'),
    # url(r'^(?P<supplier_name>\w+)/$', views.product_detail_by_supplier_name.as_view(), name='suppliers_list_by_name'),
    # url(r'^(?P<supplier_slug>[-\w]+)/$', views.product_list.as_view(), name='products_by_suppliers'),
    # url(r'^(?P<id>\d+)/(?P<slug>[-\w]+)/$', views.product_detail, name='product_detail')
    ]
