---
title: "Wheat Plant Disease Detection & Treatment Recommendation with CNN"
description: "A web-based system using Convolutional Neural Networks to detect wheat rust diseases from leaf images and recommend treatments, replicating and improving on a reference model."
tags: [Python, CNN, Deep Learning, Computer Vision, TensorFlow, Web App]
featured: false
category: ml
---

A web-based system that identifies wheat rust diseases from leaf images using a Convolutional Neural Network and suggests corresponding treatments, developed as a comparison between a replicated and a reference model.

## Overview

Rust diseases — yellow rust and brown rust — cause significant yield losses in wheat, a key global staple crop. Early, accurate detection is essential for effective disease management. This project trains a CNN on labeled images of yellow rust, brown rust, and healthy wheat plants, and integrates it into an easy-to-use web application so end users, especially farmers, can diagnose diseases and get treatment guidance.

## Key Features

- CNN-based classification of yellow rust, brown rust, and healthy wheat leaves
- Replicated model achieved 98% classification accuracy versus the original's reported 96%
- Cross-dataset validation on a separate dataset to test generalization
- Dual-feature design: disease detection plus treatment recommendation
- Web interface making the trained model accessible to non-technical users

## Technical Stack

- **ML Model:** Python, TensorFlow, Convolutional Neural Network
- **Domain:** Computer Vision, Image Classification
- **Deployment:** Web-based application
