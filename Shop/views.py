from .models import Product, Supplier
from .serializers import Product_serializers, supplier_serializers
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveDestroyAPIView, UpdateAPIView, ListAPIView
from rest_framework import status, viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.mixins import ListModelMixin
from rest_framework.pagination import PageNumberPagination

# //here we have done filters and search filters and the pagination should be here as default, added
# as well pagination for just that viewsets
class products_list(viewsets.ModelViewSet, ListModelMixin):
	queryset = Product.objects.all()
	serializer_class = Product_serializers
	filter_backends = [DjangoFilterBackend, filters.SearchFilter]
	filterset_fields = ['price', 'classification', 'size', 'supplier', 'condition', 'available']
	search_fields = ['name']
	pagination_class = PageNumberPagination
	page_size = 24
	pagination_class.page_size = page_size





class suppliers_list (viewsets.ModelViewSet):
	serializer_class = supplier_serializers
	queryset = Supplier.objects.all()




class products_by_supplier_name (ListCreateAPIView, UpdateAPIView):
	serializer_class = Product_serializers

	def get_queryset(self):

		supplier_name = self.kwargs['supplier_name']
		queryset = Product.objects.filter(supplier_id__name=supplier_name)
		return queryset


class products_details(ListAPIView, UpdateAPIView, RetrieveDestroyAPIView):
	lookup_field = 'name'

	serializer_class = Product_serializers
	def get_queryset(self):

		product_name = self.kwargs['name']
		queryset = Product.objects.filter(name=product_name)
		return queryset
