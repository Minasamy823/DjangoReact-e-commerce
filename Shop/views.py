from .models import Product, Supplier
from .serializers import Product_serializers, supplier_serializers
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveDestroyAPIView, UpdateAPIView, ListAPIView
from rest_framework import status, viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend



class products_list(viewsets.ModelViewSet):
	queryset = Product.objects.all()
	serializer_class = Product_serializers




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



# class product_detail_by_supplier_name (ListAPIView):
# 	serializer_class = Product_serializers
# 	lookup_url_kwarg = "supplier_name"
#
#
# 	def get_queryset(self):
# 			supplier_name = self.kwargs.get(self.lookup_url_kwarg)
# 			queryset = Product.objects.filter(supplier=supplier_name)
# 			return queryset
