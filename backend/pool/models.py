from django.db import models

# Create your models here.
class Booking(models.Model):
    firstname = models.CharField(max_length=128)
    lastname = models.CharField(max_length=128)
    email = models.EmailField(max_length = 254)
    time = models.TimeField()
    flexibility_before = models.TimeField()
    flexibility_after = models.TimeField()
    date = models.DateField()

    def __str__(self):
        return self.firstname+" "+self.lastname


class Register(models.Model):
    firstname = models.CharField(max_length=128)
    lastname = models.CharField(max_length=128)
    email = models.EmailField(max_length = 254)
    password = models.CharField(max_length=50)
    username = models.CharField(max_length=128)
    phone = models.CharField(max_length=10)

    def __str__(self):
    	return self.username