from django.shortcuts import render, get_object_or_404
from django.contrib import messages
from pathlib import Path
from .models import Advice
from django.db.models import Q

# Create your views here.
def homepage(request, *args, **kwargs):
    # read the reviews from the file for now
    base = Path(__file__).parent
    file_path = base / 'reviews.txt'

    with open(file_path, "r") as file:
        content = file.read()
    review_list = content.split("\n\n")

    #TODO: update this dynmically by taking reviews from users
    review_list = {
        "users" : [
            "Amanda",
            "Prashant Mehra",
            "Gaston M",
            "Manuel T",
            "Thomas T",
            "Nathasha S",
            "Dayana B",
            "Christina P",
            "Fatima I",
            "Gaston M",
            "Manuel T",
            "Thomas T",
            "Gaston M",
            "Dayana B",
        ],
        "images": [
            "Amanda",
            "Prashant_M",
            "Random_1",
            "Manuel_T",
            "Thomas_T",
            "Nathasha_S",
            "Dayana_B",
            "Christina_P",
            "Fathima_F",
            "Random_1",
            "Manuel_T",
            "Thomas_T",
            "Random_1",
            "Dayana_B",
        ],
        "professions" : [
            "Housewife",
            "Lawyer",
            "Software Engineer"
            "Counselling Therapy & Trauma-Focused Therapy",
            "Clinical Neuropsychologist & Clinical Therapist",
            "Mental Health Counselor & Psychologist",
            "Clinical Psychologist & CBT practitioner",
            "Counselling & Clinical Psychologist",
            "CBT Practitioner & Clinical Psychologist",
            "Clinical Psychologist & Therapist",
            "Counselling Therapy & Trauma-Focused Therapy",
            "Clinical Neuropsychologist & Clinical Therapist",
            "Housewife",
            "Software Engineer",
        ],
        "review": review_list 
    }

    # zip the values into one list of grouped items
    reviews = list(zip(
        review_list["users"],
        review_list["images"],
        review_list["professions"],
        review_list["review"],
    ))

    features = [
        "Smart therapist matching",
        "Time-zone friendly",
        "Easy-to-switch therapists",
        "Get urgent appointments swifty, as early as 24 hrs before",
        "Private and Safe",
        "No auto-subscription",
    ]

    sub_headings = [
        "Easy access, anytime and anywhere",
        "Flexible therapy, tailored to you",
        "Guidance from licensed professionals",
    ]

    companies = ["wpa", "bsc", "bacp", "efpa", "aca", "apa", "icf", "nhs", "dha"]

    context = {
        "company_logos": companies,
        "home_sub_headings": sub_headings,
        "feature_list": features,
        "reviews":reviews,
    }
    return render(request, "elationapp/home_page.html", context=context)

# Specific disorders
def depression(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/depression.html")

def eating_disorder(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/eating_disorder.html")

def hypochondriasis(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/hypochondriasis.html")

def mood_disorder(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/mood_disorder.html")

def ocd(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/ocd.html")

def postpartum(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/postpartum.html")

def personality_disorder(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/personality_disorder.html")

def phobia(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/phobia.html")

def psychosis(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/psychosis.html")

def ptsd(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/ptsd.html")

def schizophrenia(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/schizophrenia.html")

def adhd(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/adhd.html")

def autistic(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/autistic.html")

def abuse(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/abuse.html")

def addiction(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/addiction.html")

def self_regulation(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/self_regulation.html")

def lgbtq(request, *args, **kwargs):
    return render(request, "elationapp/pages/Specific-disorder/lgbtq.html")

# Life and work
def boosting_productivity(request, *args, **kwargs):
    return render(request, "elationapp/pages/Life-work/boosting_productivity.html")

def burnout(request, *args, **kwargs):
    return render(request, "elationapp/pages/Life-work/burnout.html")

def career_coaching(request, *args, **kwargs):
    return render(request, "elationapp/pages/Life-work/career_coaching.html")

def chronic_illness(request, *args, **kwargs):
    return render(request, "elationapp/pages/Life-work/chronic_illness.html")

def crisis_intervention(request, *args, **kwargs):
    return render(request, "elationapp/pages/Life-work/crisis_intervention.html")

def existential_crisis(request, *args, **kwargs):
    return render(request, "elationapp/pages/Life-work/existential_crisis.html")

def suicidal_tendencies(request, *args, **kwargs):
    return render(request, "elationapp/pages/Life-work/suicidal_tendencies.html")

def trauma(request, *args, **kwargs):
    return render(request, "elationapp/pages/Life-work/trauma.html")

# Relationship
def couples_counselling(request, *args, **kwargs):
    return render(request, "elationapp/pages/Relationship/couples_counselling.html")

def divorce_counselling(request, *args, **kwargs):
    return render(request, "elationapp/pages/Relationship/divorce_counselling.html")

def family_counselling(request, *args, **kwargs):
    return render(request, "elationapp/pages/Relationship/family_counselling.html")

def infertility_counselling(request, *args, **kwargs):
    return render(request, "elationapp/pages/Relationship/infertility_counselling.html")

# def sexual_intimacy(request, *args, **kwargs):
#     return render(request, "elationapp/pages/Relationship/sexual_initmacy.html")

def parental_counselling(request, *args, **kwargs):
    return render(request, "elationapp/pages/Relationship/sexual_intimacy.html")

# Advice room
def advice_room(request, *args, **kwargs):
    # Without default: request.GET.get('query') → None if missing
    # With default: request.GET.get('query', '') → '' if missing
    query = request.GET.get('query', '').strip().rstrip('/')

    if query:
        # here | means OR
        advice = Advice.objects.filter(
            Q(title__icontains=query) |
            Q(description__icontains=query)
        )
        if len(advice) == 0:
            messages.error(request, "0 advice found for ")
        else:
            messages.info(request, f"{len(advice)} results found for")
    else:
        advice = Advice.objects.all()

    context = {
        "advice":advice,
        "query":query,  
    }
    return render(request, "elationapp/advice_room.html", context=context)