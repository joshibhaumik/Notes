from rest_framework import routers
from django.urls import path, include
from .api import SignUpAPI, LoginAPI
from knox import views as knox_views


urlpatterns = [
    path('login/', LoginAPI.as_view()),
    path('signup/', SignUpAPI.as_view()),
    path('logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('knox/', include("knox.urls")),
]
