from django.urls import include, path
from .views import PrintsView

urlpatterns = [
    # path("printers/", PrintersView.as_view(),name="printers"),
    path("prints/<int:pk>", PrintsView.as_view(),name="prints"),

]
