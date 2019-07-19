from django.db import models
from Shop.models import Product
from Customers.models import Userprofile
from order.models import Order

# Create your models here.


class Cart (models.Model):
    product = models.ForeignKey(Product, related_name="products_cart", on_delete=models.CASCADE)
    user = models.ForeignKey(Userprofile, related_name='users_cart', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
