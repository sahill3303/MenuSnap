from django.contrib import admin
from django.utils.translation import gettext_lazy as _ 

# admin site header and title modification
admin.site.site_header = _("MenuSnap: Streamlining Food Ordering")
admin.site.site_title = _("MenuSnap")
admin.site.index_title = _("Ordering Partner")
# Models Registration for admin panel
from .models import Orders , Product , Category, OrderProduct
admin.site.register(Product)
# product inline
class OrderProductInline(admin.TabularInline):
    model = OrderProduct
    extra = 1
# order admin
class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderProductInline]
admin.site.register(Orders, OrderAdmin)
admin.site.register(Category)