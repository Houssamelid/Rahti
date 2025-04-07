# in serializers.py
from rest_framework import serializers
from .models import Property

class PropertiesListSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Property
        fields = ['id', 'title', 'description', 'price_per_night', 'bedrooms', 'bathrooms', 'guests', 'country', 'country_code', 'category', 'image_url']

    def get_image_url(self, obj):
        return obj.image_url  # This uses the property directly now