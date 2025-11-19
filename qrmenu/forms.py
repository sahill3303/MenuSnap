from django import forms
from .models import Order

class Order_Total(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['name', 'email',  'total_amount']
        