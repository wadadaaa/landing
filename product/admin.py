from django.contrib import admin
from django.conf import settings
from product.models import (
    Product,

)
from django.contrib.auth.admin import UserAdmin


class ProductAdmin(admin.ModelAdmin):
    model = Product

admin.site.register(Product, ProductAdmin)
