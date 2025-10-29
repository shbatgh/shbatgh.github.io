---
title: "Cellvis - BioVision"
description: "3D cellular analysis platform for tracking stem cell behavior in Drosophila germaria"
date: 2024-01-01
tags: ["computational-biology", "computer-vision", "3d-analysis", "cell-tracking"]
---

# Cellvis - BioVision

## Overview

BioVision is an end-to-end computational platform for analyzing 3D time-lapse images of germaria (the regions in Drosophila ovaries where stem cells divide and differentiate). The goal is to automatically identify and track cells across stacks and timepoints to better understand their behavior and organization.

## Project Description

Our project focuses on bridging the gap between advanced microscopy imaging and computational analysis to make large-scale cellular data easier to interpret and quantify.

### The Pipeline

The pipeline starts with **raw microscopy stacks**, which we process using 3D segmentation techniques to isolate individual cells. After segmentation, we generate 3D meshes for each cell to preserve their shapes and spatial context. From these meshes, we extract various morphological and spatial features — such as cell volume, surface area, position, and orientation which serve as numerical representations of cell behavior over time.

### Analysis & Clustering

Once features are extracted, we apply **unsupervised clustering algorithms** (like K-means and spectral clustering) to group cells with similar properties or behaviors. This helps reveal potential biological patterns, such as regions with coordinated growth or cells transitioning between states.

### Interactive Visualization

Scientists can view the mesh animations of the microscopy data using a Blender plugin. The clustering results can be viewed through our GUI.

## Key Features

- **Segmentation and tracking**: We leverage Cellpose-SAM to segment each slice and match cells across slices and timepoints using our cell matching algorithm
- **Mesh Generation**: Better visualization of cell shapes and spatial context through 3D mesh models
- **Feature Extraction**: Morphological and spatial analysis (volume, surface area, position, orientation)
- **Unsupervised Clustering**: Clustering algorithms to identify behavioral patterns
- **Interactive GUI**: Real-time visualization and parameter adjustment

## Demonstrations

# Mesh Visualization
<video width="100%" controls>
  <source src="/videos/output1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video width="100%" controls>
  <source src="/videos/output2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video width="100%" controls>
  <source src="/videos/output3.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

# Clustering

## Data Loading
![Data Loading](/images/image1.png)
## Feature Selection
![Feature Selection](/images/image2.png)
## Clustering Parameters
![Clustering Parameters](/images/image3.png)
## Visualizations
![Visualizations](/images/image4.png)
## UMAP Cluster Visualization
![UMAP Cluster Visualization](/images/image5.png)

## Impact

We have worked with the Kalderon Lab at Columbia University in order to improve our software, and they have already made multiple discoveries and saved lots of time by using our software.

BioVision provides researchers with a powerful tool to:
- Accelerate biological research by automating tedious manual tracking
- Discover hidden patterns in cellular behavior
- Quantify complex 3D morphological changes
- Make data-driven decisions about cell state transitions

---

[← Back to Portfolio](/)