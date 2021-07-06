from django import template
from django.template.defaulttags import register
register = template.Library()


@register.filter
def index(indexable,i):
    return indexable[i]