# core/context_processors.py
def specific_disorder_context(request):
    return {
        'specific': {
            'abuse': 'Abuse',
            'addiction': 'Addiction',
            'adhd': 'ADHD',
            'autistic': 'Autistic',
            'depression': 'Depression',
            'eating_disorder': 'Eating Disorder',
            'hypochondriasis': 'Hypochondriasis',
            'lgbtq': 'LGBTQ+',
            'mood_disorder': 'Mood Disorder',
            'ocd': 'OCD',
            'personality': 'Personality Disorder',
            'phobia': 'Phobia',
            'postpartum': 'Postpartum',
            'psychosis': 'Psychosis',
            'ptsd': 'PTSD',
            'schizophrenia': 'Schizophrenia',
            'self_regulation': 'Self Regulation',
        }
    }

def life_work_context(request):
    return {
        'life_work' : {
            'boosting_productivity' : 'Boosting Productivity',
            'burnout' : 'Burnout',
            'career_coaching' : 'Career Coaching',
            'chronic_illness' : 'Chronic Illness',
            'crisis_intervention' : 'Crisis Intervention',
            'existential_crisis' : 'Existential Crisis',
            'suicidal_tendencies' : 'Suicidal Tendencies',
            'trauma' : 'Trauma',
        }
    }    

def relationship_context(request):
    return {
        'relationship' : {
            'couples_counselling' : "Couples Counselling",
            'divorce_counselling' : "Divorce Counselling",
            'family_counselling' : "Family Counselling",
            'infertility_counselling' : "Infertility Counselling",
            'parental_counselling' : "Sexual Intimacy",
        }
    }
