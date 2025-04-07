from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import Property
from .serializers import PropertiesListSerializer

@api_view(['GET'])  # Changed 'Get' to 'GET'
@authentication_classes([])  # Adjust as needed later
@permission_classes([])  # Adjust as needed later
def properties_list(request):
    properties = Property.objects.all()
    serializer = PropertiesListSerializer(properties, many=True)

    return JsonResponse({
        'data': serializer.data
    })