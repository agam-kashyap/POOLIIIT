from django.contrib import admin

# Register your models here.
from .models import Booking, Register

admin.site.register(Booking)
admin.site.register(Register)