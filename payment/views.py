from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
import json

import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY
stripe.log = 'info'  # or 'debug'

# How it works - in 3 steps:
# 1. GET TOKEN_ID, DESCRIPTION, CURRENCY, AMOUNT FROM FRONTEND
"""
#2.
try:
    stripe.Charge.create(
            amount is in cents: i.e 999 is 9.99
            amount      = request.POST.get('amount', ''),
            currency    = request.POST.get('currency', ''),
            source      = request.POST.get('source', ''), #token.id
            description = request.POST.get('description', '')

            )
            Statement descriptors are limited to 22 characters, cannot use the
            special characters <, >, ', or ", and must not consist solely of numbers.
            metadata is the opposite and will only appear in your DASHBOARD(e.g when
            looking at the page for an individual charge) and is also available in common
            reports and exports. As an example, your store's order ID can be attached to
            the charge used to pay for that order.
            (!!! DONT STORE ANY SENSITIVE INFORMATION - CARD DETAILS ETC as metadata or
            in the charge's description parameter)
"""
# 3 Return response to my frontend to display a confirmation / error

"""
- Optional: #2 can create a new model instance storing the customers_payment i.e
name, address of customer,
"""


@csrf_exempt
def checkout(request):

    if request.method == "POST":
        try:
            charge = stripe.Charge.create(
                amount=request.POST.get('amount', ''),
                currency="usd",
                source=request.POST.get('source', ''),
                description="my third payment",
                )
            if charge['status'] == 'succeeded':
                    return HttpResponse(
                        'Your transaction has been successful.')

            else:
                raise stripe.error.CardError

        except Exception as e:
            return HttpResponse(
                'Unable to process payment, try again.'
            )
