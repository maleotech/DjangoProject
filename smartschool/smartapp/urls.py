from django.urls import path
from .views import LandingPageView

urlpatterns = [
    path('', LandingPageView, name='landing_page'),
]
