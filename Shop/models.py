from django.db import models
from django.urls import reverse


#Models of the Products
class Supplier (models.Model):
     name = models.CharField(max_length=250, default='')

     def __str__(self):
            return "%s" % self.id

     def __str__(self):
        return self.name


     def get_absolute_url(self):
        return reverse('shop', args=[self.name])



class Product(models.Model):
    supplier = models.ForeignKey("Supplier", related_name='suppliers', on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
    url_height=models.PositiveIntegerField(default=50)
    url_width=models.PositiveIntegerField(default=50)
    image = models.ImageField(upload_to='Images', width_field='url_width', height_field='url_height')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=1000)
    size = models.PositiveIntegerField()
    amount= models.PositiveIntegerField()
    material = models.CharField(max_length=250)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    condition = models.CharField(max_length=250)
    classification = models.CharField(max_length=5) #for women or men


    def __str__(self):
           return "%s" % self.id

    def __str__(self):
            return self.name
    

    def get_absolute_url(self):
        return reverse('shop:product_detail', args=[self.name])
