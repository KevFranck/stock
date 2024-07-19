from rest_framework import serializers
from .models import Produit


class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = (
            'id',
            'nom',
            'prix',
            'image',
            'created_at',
            'updated_at'
        )
        read_only_fields = ['created_at','updated_at']