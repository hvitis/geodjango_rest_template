from django.urls import include, path
from .views import PrintersView

urlpatterns = [
    # path("printers/", PrintersView.as_view(),name="printers"),
    path("printers/<int:pk>", PrintersView.as_view(),name="printers"),

]