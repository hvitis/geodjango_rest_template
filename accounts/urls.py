from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserProfileFullDetailView, UserProfileFullListView, PrinterListView, PrinterDetailView
# UserProfileListCreateView, UserProfileDetailCreateView

urlpatterns = [
    # GETs all user profiles and their NESTED objects
    path("full-profiles",UserProfileFullListView.as_view(),name="full-profiles-list"),
    # GETs single LOGGED user profile and his NESTED objects 
    path("full-profiles/<int:pk>",UserProfileFullDetailView.as_view(),name="full-profile-detail"),

    path("printers",PrinterListView.as_view(),name="printers-list"),
    path("printers/<int:pk>",PrinterDetailView.as_view(),name="printers-detail"),

    # # GETs all user profiles and their NESTED objects
    # path("profiles",UserProfileListCreateView.as_view(),name="profiles"),
    # # GETs single LOGGED user profile and his NESTED objects 
    # path("profile/<int:pk>",UserProfileDetailCreateView.as_view(),name="profile"),
]