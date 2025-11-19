from django.urls import path
from .views import home, fooditems
from django.conf import settings
from django.conf.urls.static import static
from . import views #all views
from .views import download_order_bill #download view


#edit
urlpatterns = [
    path('', home, name='home'),
    path('fooditems/', fooditems, name='fooditems'),
    path('thank-you/', views.thank_you, name='thank_you'),
    path('ht-order/', views.ht_order, name='ht_order'),
    path('contact-us/', views.contact_us, name='contact_us'),
    path('about-us/', views.about_us, name='about_us'),
    path('download-bill/<int:order_id>/', download_order_bill, name='download_order_bill'), # download bill
]

# urls 
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #edit