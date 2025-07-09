from django.urls import path
from . import views

urlpatterns = [
    path("", views.homepage, name=""),
    path("Depression/", views.depression, name="depression"),
    path("Eating-disorder/", views.eating_disorder, name="eating_disorder"),
    path("Hypochondriasis/", views.hypochondriasis, name="hypochondriasis"),
    path("Mood-disorder/", views.mood_disorder, name="mood_disorder"),
    path("OCD/", views.ocd, name="ocd"),
    path("Postpartum-Depression/", views.postpartum, name="postpartum"),
    path("Personality-disorder/", views.personality_disorder, name="personality"),
    path("Phobia/", views.phobia, name="phobia"),
    path("Psychosis/", views.psychosis, name="psychosis"),
    path("PTSD/", views.ptsd, name="ptsd"),
    path("Schizophrenia/", views.schizophrenia, name="schizophrenia"),
    path("ADHD/", views.adhd, name="adhd"),
    path("Autistic/", views.autistic, name="autistic"),
    path("Abuse/", views.abuse, name="abuse"),
    path("Addiction/", views.addiction, name="addiction"),
    path("Self-Regulation/", views.self_regulation, name="self_regulation"),
    path("LGBTQ/", views.lgbtq, name="lgbtq"),
    
    path("Boosting-productivity/", views.boosting_productivity, name="boosting_productivity"),
    path("Burnout/", views.burnout, name="burnout"),
    path("Career-coaching/", views.career_coaching, name="career_coaching"),
    path("Chronic-illness/", views.chronic_illness, name="chronic_illness"),
    path("Crisis-intervention/", views.crisis_intervention, name="crisis_intervention"),
    path("Exixtential-crisis/", views.existential_crisis, name="existential_crisis"),
    path("Suicidal-tendencies/", views.suicidal_tendencies, name="suicidal_tendencies"),
    path("Trauma/", views.trauma, name="trauma"),

    path("Couples-counselling/", views.couples_counselling, name="couples_counselling"),
    path("Divorce-counselling/", views.divorce_counselling, name="divorce_counselling"),
    path("Family-counselling/", views.family_counselling, name="family_counselling"),
    path("Infertility-counselling/", views.infertility_counselling, name="infertility_counselling"),
    path("Parental-counselling/", views.parental_counselling, name="parental_counselling"),
    # path("test/", views.test, name="test"),

    path("Advice-room/", views.advice_room, name="advice_room"),
]
