from django.db import models

class Category(models.Model): #category data
    code = models.CharField(max_length=100, primary_key=True )
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.code
class Product(models.Model): #product details data
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    rating = models.FloatField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    img = models.ImageField(upload_to='product_images/',null=True, blank=True)
    quantity = models.IntegerField()

    def __str__(self):
        return self.name
class Orders(models.Model): #order details data (excl. product details)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    table_no = models.IntegerField()
    instructions = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    is_fullfilled = models.BooleanField(default=False)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    
    def __str__(self):
        return self.name
class OrderProduct(models.Model): #order details data (incl. product details)

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Orders, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return self.product.name