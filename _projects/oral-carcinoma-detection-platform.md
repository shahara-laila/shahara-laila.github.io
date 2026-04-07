---
title: "Oral Carcinoma Detection Platform"
description: "A Django-based web platform for automated oral carcinoma detection powered by a YOLO deep learning model."
tags: [Python, Django, MySQL, TensorFlow, YOLO, Computer Vision]
featured: true
category: research
---

A full-stack web application that enables clinicians and researchers to upload oral cavity images and receive automated detection results identifying potential carcinoma regions with bounding box annotations.

## Overview

This platform was built as a practical deployment of the YOLO-based oral carcinoma detection model developed during my B.Sc. thesis. The goal was to create a usable, clinical-grade interface that could integrate detection AI into a real workflow.

## Key Features

- Image upload and preprocessing pipeline
- Real-time YOLO inference for carcinoma region localization
- Bounding box visualization overlaid on uploaded images
- Patient record management with detection history
- Responsive web interface accessible from clinical devices

## Technical Stack

- **Backend:** Python 3, Django
- **Database:** MySQL
- **ML Model:** TensorFlow + YOLO
- **Frontend:** HTML, CSS, JavaScript
