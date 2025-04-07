import uuid
from django.db import models
from django.conf import settings
from useraccount.models import User

class Property(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)  
    title = models.CharField(max_length=255)  
    description = models.TextField()
    price_per_night = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    guests = models.IntegerField()
    country = models.CharField(max_length=255)
    country_code = models.CharField(max_length=10)
    category = models.CharField(max_length=255)
    image = models.ImageField(upload_to='uploads/properties')  # Ensure MEDIA settings are configured
    landlord = models.ForeignKey(User, related_name='properties', on_delete=models.CASCADE)

    @property
    def image_url(self):
        if self.image:
            return f'{settings.WEBSITE_URL}{self.image.url}'  # Return full URL
        return None  # No image URL if image is not present