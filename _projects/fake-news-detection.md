---
title: "Fake News Detection System"
description: "A machine learning pipeline for detecting fake news articles using text classification with scikit-learn and TensorFlow."
tags: [Python, Scikit-learn, TensorFlow, Pandas, NumPy, NLP]
featured: false
category: ml
---

A text classification system that distinguishes real news articles from misinformation using a combination of classical ML and deep learning approaches.

## Overview

Fake news detection is a critical NLP task with significant societal implications. This system implements and compares multiple classification approaches — from TF-IDF with traditional classifiers to neural network-based models — providing a comprehensive benchmark on news article datasets.

## Key Features

- Text preprocessing pipeline (tokenization, stopword removal, stemming)
- Feature engineering: TF-IDF, n-grams, word embeddings
- Multiple classifiers: Logistic Regression, SVM, Random Forest, Neural Network
- Performance comparison across models with cross-validation
- Prediction API for classifying new articles

## Technical Stack

- **ML:** Python 3, Scikit-learn, TensorFlow
- **Data:** Pandas, NumPy
- **NLP:** NLTK, TF-IDF vectorization
