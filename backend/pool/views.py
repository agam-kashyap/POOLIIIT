from django.shortcuts import render

# Create your views here.
from pool.models import Booking, Register
from pool.serializers import BookingSerializer, RegisterSerializer
from rest_framework import viewsets

class BookingList(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    queryset = Booking.objects.all()
    
class RegisterList(viewsets.ModelViewSet):
    serializer_class = RegisterSerializer
    queryset = Register.objects.all()
    