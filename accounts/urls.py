from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserProfileDetailedDetailView, UserProfileDetailedListView
# UserProfileListCreateView, UserProfileDetailCreateView

urlpatterns = [
    # GETs all user profiles and their NESTED objects
    path("detailed-profiles",UserProfileDetailedListView.as_view(),name="detailed-profiles"),
    # GETs single LOGGED user profile and his NESTED objects 
    path("detailed-profile/<int:pk>",UserProfileDetailedDetailView.as_view(),name="detailed-profile"),

    # # GETs all user profiles and their NESTED objects
    # path("profiles",UserProfileListCreateView.as_view(),name="profiles"),
    # # GETs single LOGGED user profile and his NESTED objects 
    # path("profile/<int:pk>",UserProfileDetailCreateView.as_view(),name="profile"),


]