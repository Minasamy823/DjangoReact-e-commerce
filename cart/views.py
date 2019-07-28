from rest_framework import viewsets
from .models import Cart, CartItem
from .serializers import cart_serializers, CartItem_serializers
from rest_framework.permissions import IsAuthenticated
from Shop.models import Product
from Shop.serializers import Product_serializers
from rest_framework.generics import ListCreateAPIView, DestroyAPIView
from rest_framework.mixins import CreateModelMixin
from rest_framework.decorators import action
from rest_framework.response import Response

class CartItem_viewsets (ListCreateAPIView, DestroyAPIView):
    serializer_class = CartItem_serializers
    permission_classes = [IsAuthenticated]
    queryset = CartItem.objects.all()
    # def get_queryset(self):
    #     cart = Cart.objects.get(user=self.request.user)
    #     return CartItem.objects.filter(cart=cart)



    def perform_create(self, serializer):
        cart = Cart.objects.get(user=self.request.user)
        serializer.save(cart = cart)



    def post (self, request):
        cart = Cart.objects.get(user=self.request.user)
        product = Product.objects.get(pk=self.request.data['product_id'])
        quantity = int(self.request.data['quantity'])
        existing = CartItem.objects.filter(product=product, cart=cart).first()

        if existing:
                existing.quantity += quantity
                existing.save()
        else:
            new = CartItem(product=product, quantity=quantity, cart=cart)
            new.save()

        return Response("success")


    def delete (self, request):
        cart = Cart.objects.get(user=self.request.user)
        product = Product.objects.get(pk=self.request.data['product_id'])
        quantity = int(self.request.data['quantity'])
        existing = CartItem.objects.filter(product=product, cart=cart).first()

        if existing and existing.quantity > 1:
            existing.quantity -= quantity
            if existing.quantity == 0:
                existing.delete()
            else:
                existing.save()
        else:
            existing.delete()

        return Response("success")






class CartViewSet(ListCreateAPIView):
    """
    API endpoint that allows carts to be viewed or edited.
    """

    serializer_class = cart_serializers
    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Cart.objects.filter(user=self.request.user)

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)


    # def post(self, request, pk=None, *args, **kwargs):
    #     user = self.request.user
    #
    #     cart = Cart.objects.filter(user=user)
    #
    #     product = Product.objects.get(
    #             pk=request.data['product_id']
    #         )
    #     quantity = int(request.data['quantity'])
    #
    #
    #     # Disallow adding to cart if available inventory is not enough
    #
    #
    #     existing_cart_item = CartItem.objects.filter(cart=cart, product=product)
    #     # before creating a new cart item check if it is in the cart already
    #     # and if yes increase the quantity of that item
    #     if existing_cart_item:
    #         existing_cart_item.quantity += quantity
    #         existing_cart_item.save()
    #     else:
    #         new_cart_item = CartItem(cart=cart, product=product, quantity=quantity)
    #         new_cart_item.save()
    #
    #     # return the updated cart to indicate success
    #     serializer = cart_serializers(cart)
    #     return Response(serializer.data)








# class products_details_in_cart(ListAPIView, RetrieveDestroyAPIView):
# 	lookup_field = 'pk'
#
# 	serializer_class = Product_serializers
# 	def get_queryset(self):
#
# 		product_id= self.kwargs['pk']
# 		queryset = Product.objects.filter(user=self.request.user, pk=product_id)
# 		return queryset
