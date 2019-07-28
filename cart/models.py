from django.db import models
from Shop.models import Product
from Customers.models import Userprofile
from order.models import Order

# Create your models here.


class Cart (models.Model):
    user = models.ForeignKey(Userprofile, related_name='users_cart', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)





class CartItem (models.Model):
    product = models.ForeignKey(Product, related_name="items", on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, related_name="items", on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1, null=True, blank=True)

    def __str__(self):
        return '%s: %s' % (self.product.name, self.quantity)
