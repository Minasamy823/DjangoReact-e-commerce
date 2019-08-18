from django.db import models
from Shop.models import Product
from Customers.models import Userprofile
from order.models import Order
from django.db.models.signals import post_save
# Create your models here.


class Cart (models.Model):
    user = models.ForeignKey(Userprofile, related_name='users_cart', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return '{}' .format(self.user)

# thisone for creating the cart for any user hat register automatically
    def create_shopCart(sender,**kwargs):
        if kwargs["created"]:
            Cart.objects.create(user=kwargs["instance"])

    post_save.connect(create_shopCart,sender=Userprofile)



class CartItem (models.Model):
    product = models.ForeignKey(Product, related_name="items", on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, related_name="items", on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1, null=True, blank=True)

    def __str__(self):
        return '%s %s' % (self.product.id , self.quantity)
