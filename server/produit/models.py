from django.db import models

# Create your models here.
class Produit(models.Model):
    nom = models.CharField(max_length=100)
    prix = models.IntegerField()
    image = models.ImageField(upload_to='images/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)