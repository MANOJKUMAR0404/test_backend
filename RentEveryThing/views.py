from django.shortcuts import render
from django.http import HttpResponse
def my_view(request):
    return render(request,"home.html")

def drop_down(request):
    return render(request,"drop-down.html")
# Create your views here.
