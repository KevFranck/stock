from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from .models import Produit
from .serializers import ProduitSerializer

# Create your views here.
class ProduitView(APIView):
    def get(self, request):
        produits = Produit.objects.all()
        serializer = ProduitSerializer(produits, many=True)
        return Response(serializer.data)
    
    def get_produit(self, request, pk):
        produit = Produit.objects.get(pk=pk)
        serializer = ProduitSerializer(produit)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ProduitSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        produit_to_update = Produit.objects.get(pk=pk)
        serializer = ProduitSerializer(produit_to_update, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        produit_to_delete = Produit.objects.get(pk=pk)
        produit_to_delete.delete()
        return Response(status=HTTP_204_NO_CONTENT)