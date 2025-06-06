from django.shortcuts import render
from pathlib import Path

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

# def test_page(request, *args, **kwargs):
#     return render(request, "elationapp/components/how_we_work_section.html")