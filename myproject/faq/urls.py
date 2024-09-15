from django.urls import path
from .views import FAQListCreate, FAQRetrieveUpdateDestroy

urlpatterns = [
    path('faqs/', FAQListCreate.as_view(), name='faq-list-create'),
    path('faqs/<int:pk>/', FAQRetrieveUpdateDestroy.as_view(), name='faq-detail'),
]

