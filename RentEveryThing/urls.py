from django.urls import path
from . import views

urlpatterns = [
    path('', views.my_view, name='index'),
    path('drop', views.drop_down, name='drop'),
]