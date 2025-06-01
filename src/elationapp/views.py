from django.shortcuts import render

# Create your views here.
def homepage(request, *args, **kwargs):
    context = {
        "company_logos": ["wpa", "bsc", "bacp", "efpa", "aca", "apa", "icf", "nhs", "dha"],
        "home_sub_headings": [
            "Easy access, anytime and anywhere",
            "Flexible therapy, tailored to you",
            "Guidance from licensed professionals",
        ],
        "feature_list": [
            "Smart therapist matching",
            "Time-zone friendly",
            "Easy-to-switch therapists",
            "Get urgent appointments swifty, as early as 24 hrs before",
            "Private and Safe",
            "No auto-subscription",
        ],
    }
    return render(request, "elationapp/home_page.html", context)