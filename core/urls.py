from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url
from django.views.generic import TemplateView
from rest_framework_swagger.views import get_swagger_view
from django.views.decorators.cache import cache_control
from django.http import HttpResponse
from django.conf import settings
from django.conf.urls.static import static
from .custom_jwt_tokens import CustomTokenObtainPairView
schema_view = get_swagger_view(title='Accounts API')
urlpatterns = [
    path('admin/', admin.site.urls),

    # Custom Djoser endpoint with extended claims
    path('api/auth/jwt/create', CustomTokenObtainPairView.as_view()),
    # path to djoser end points
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),

    # path to our account's app endpoints
    path("api/", include("accounts.urls")),
    path("api/", include("printers.urls")),
    path("api/", include("prints.urls")),
    path("api/", include("orders.urls")),

    path("docs/", schema_view),
    # path('service-worker.js', TemplateView.as_view(template_name="service-worker.js",
   
    # re_path(".*", TemplateView.as_view(template_name="service-worker.js",
    #                                    content_type='application/javascript')),
    
] 

if settings.DEBUG:
      urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path('.*', TemplateView.as_view(template_name="index.html"))]


# DJOSER URLS

# auth/users/
# auth/users/me/
# auth/users/confirm/
# auth/users/resend_activation/
# auth/users/set_password/
# auth/users/reset_password/
# auth/users/reset_password_confirm/
# auth/users/set_username/
# auth/users/reset_username/
# auth/users/reset_username_confirm/
# auth/token/login/ (Token Based Authentication)
# auth/token/logout/ (Token Based Authentication)
# auth/jwt/create/ (JSON Web Token Authentication)
# auth/jwt/refresh/ (JSON Web Token Authentication)
# auth/jwt/verify/ (JSON Web Token Authentication)
