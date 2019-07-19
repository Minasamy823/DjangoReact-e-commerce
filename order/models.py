from django.db import models
from Customers.models import Userprofile
from Shop.models import Product

Payemnt_methods = (
        ('1','visa'),
        ('2', 'Bank wire'),
        ('3', 'Paypal')
    )



class Order (models.Model):
    user = models.ForeignKey(Userprofile, related_name='customers', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='products', on_delete=models.CASCADE)
    first_name = models.CharField(max_length = 300, default='')
    last_name = models.CharField(max_length = 300, default='')
    street = models.CharField(max_length = 300, default='')
    address = models.CharField(max_length = 300, default='')
    country = models.CharField(max_length = 300, default='')
    city = models.CharField(max_length = 300, default='')
    zip =  models.IntegerField(default=0)
    email = models.EmailField(max_length=20)
    phone = models.IntegerField(default=0)
    payment = models.CharField(max_length=1, choices=Payemnt_methods)
    comments = models.CharField(max_length = 300)
