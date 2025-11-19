from django.shortcuts import render,redirect
from django import forms
from .models import Orders ,Product, OrderProduct

class OrderForm(forms.Form): # confirm order form creation
    name = forms.CharField(label="Name", max_length=100)
    email = forms.EmailField(label="Email")
    table_no = forms.IntegerField(label="Table No")
    instructions = forms.CharField(label="Instructions", max_length=500)
    products = forms.CharField(label="Products", widget=forms.HiddenInput())
    

def home(request): #index.html linking
    if request.method == "POST":
        # create a form instance and populate it with data from the request:
        # update products ids str to list
        request.POST = request.POST.copy()
        form = OrderForm(request.POST)
        # check whether it's valid:
        if form.is_valid(): # process the data in form.cleaned_data as required
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            table_no = form.cleaned_data['table_no']
            instructions = form.cleaned_data['instructions']
            products = form.cleaned_data['products']
            print(products)
            order = Orders(name=name, email=email, table_no=table_no, instructions=instructions)
            order.save()
            products = products.split(',')
            for product in products:
                product_id, quantity = product.split(':')
                OrderProduct(product_id=product_id, quantity=quantity, order=order ).save()
            order.total = sum([orderproduct.product.price * orderproduct.quantity for orderproduct in order.orderproduct_set.all()])
            order.save()
            return redirect('/thank-you/?order_id='+ str(order.id)) # redirect to a new URL
        else:
            print(form.errors)
            return render(request, 'index.html' ,  {
                'form':form
            })
    else: # if a GET (or any other method) we'll create a blank form
        form = OrderForm()
    return render(request, 'index.html', {'form':form})

def thank_you(request): #thankyou.html
        order_id = request.GET.get('order_id')
        order = Orders.objects.get(id=order_id)
        return render(request, 'thankyou.html', {
            'order':order
        })

def ht_order(request): #htorder.html
        return render(request, 'htorder.html')

def contact_us(request): #contactus.html
        return render(request, 'contactus.html')

def about_us(request): #aboutus.html
        return render(request, 'aboutus.html')

# view to return js file with product items
def fooditems(request): #fooditems.js
    products = Product.objects.all()
    return render(request, 'fooditem.js', {'products': products}, content_type='application/javascript')

# for bill download
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa
from .models import Orders
def download_order_bill(request, order_id):
    # Retrieve the order details
    try:
        order = Orders.objects.get(id=order_id)
        template = get_template('bill_template.html')  # A template for the bill
        context = {
            'order': order,
            'order_products': order.orderproduct_set.all(),
        }
        html = template.render(context)

        # Generate PDF
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="Order_{order_id}_Bill.pdf"'
        pisa_status = pisa.CreatePDF(html, dest=response)

        if pisa_status.err:
            return HttpResponse('We had some errors while generating your bill.')
        return response
    except Orders.DoesNotExist:
        return HttpResponse("Order not found.")


