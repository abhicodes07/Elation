from django.urls import path
from . import views

urlpatterns = [
    path("", views.homepage, name=""),
    # path("test/", views.test_page, name="test"),
]
