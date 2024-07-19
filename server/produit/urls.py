from django.urls import path
from .views import ProduitView

urlpatterns = [
    path('produit/', ProduitView.as_view()),
    path('produit/<int:pk>/', ProduitView.as_view())
]
