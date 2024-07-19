from django.contrib import admin
from .models import Produit

# Register your models here.
models_list = [Produit]
admin.site.register(models_list)